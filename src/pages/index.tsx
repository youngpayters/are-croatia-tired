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

const footerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "16px",
  padding: "8px",
  backgroundColor: "rgba(200, 200, 200, 0.7)",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
};

const gifIds: { [answer: string]: string[] } = {
  yes: [
    "26BoEL17F2p4xPbna",
    "1j8P1JhBOiq7ZXtkqr",
    "uFkptJNAZWSHDENPgT",
    "xT8qBvH1pAhtfSx52U",
    "qBOYvQzujLmsE",
  ],
  no: [
    "KCY0yALOOQ5gP6l1a5",
    "d7BRHyjT329N0ppVsH",
    "VgHL4NnWOVCg0eDYuV",
    "5WISrqeKbxS0mXlhT7",
    "9P1wgP4XPGhBnwltWq",
    "pHI6xGnrSVA6rtf5dI",
    "MBCrWIdDS5RwvZqO6z",
  ],
  maybe: [
    "mF4k0YXIHDHzy",
    "l378AEZceMwWboAQE",
    "3o72F0bGAJXKErcgik",
    "l41YyUW0DcI6gpzgs",
  ],
};

const messages: { [answer: string]: string[] } = {
  yes: ["Yes...😢😢😢"],
  no: ["Nope!", "Nikada", "Never", "Not a hope", "Never.", "no"],
  maybe: ["Maybe..."],
};

function getRndInteger(minimum: number, maximum: number) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

const giphyFetch = new GiphyFetch(process.env.GATSBY_GIPHY_API_KEY ?? "");
const answer = "no";

function GifComponent() {
  const [gif, setGif] = useState<IGif | null>(null);
  useAsync(async () => {
    const { data } = await giphyFetch.gif(
      gifIds[answer][getRndInteger(0, gifIds[answer].length)]
    );
    setGif(data);
  }, []);
  return gif && <Gif gif={gif} width={400} />;
}

const Footer = () => (
  <div style={footerStyle}>
    <p>
      Developed by <a href="https://twitter.com/dpetersdev">Daryl Peters</a>
      <br />
      <span>
        Want to create a last man standing competition, try it out{" "}
        <a href="https://app.lastfolkstanding.com">here</a>
      </span>
    </p>
  </div>
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div id="container" style={containerStyle}>
        <h1 style={headingStyles}>
          {messages[answer][getRndInteger(0, messages[answer].length)]}
          <br />
        </h1>
        <GifComponent />
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Are Croatia Tired?</title>;
