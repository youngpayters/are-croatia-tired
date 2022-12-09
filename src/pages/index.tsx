import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { IGif } from "@giphy/js-types";
import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";
import { useAsync } from "react-async-hook";

const pageStyles = {
  display: "flex",
  flex: "row",
  justifyContent: "center",
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const gifIds = [
  "KCY0yALOOQ5gP6l1a5",
  "d7BRHyjT329N0ppVsH",
  "VgHL4NnWOVCg0eDYuV",
  "5WISrqeKbxS0mXlhT7",
];

const messages = ["Nope!", "Nikada", "Never", "Not a hope", "Never.", "no"];

function getRndInteger(minimum: number, maximum: number) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

const giphyFetch = new GiphyFetch(process.env.GATSBY_GIPHY_API_KEY ?? "");

function GifComponent() {
  const [gif, setGif] = useState<IGif | null>(null);
  useAsync(async () => {
    const { data } = await giphyFetch.gif(
      gifIds[getRndInteger(0, gifIds.length - 1)]
    );
    setGif(data);
  }, []);
  return gif && <Gif gif={gif} width={400} />;
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div id="container" style={containerStyle}>
        <h1 style={headingStyles}>
          {messages[getRndInteger(0, messages.length)]}
          <br />
        </h1>
        <GifComponent />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Are Croatia Tired?</title>;
