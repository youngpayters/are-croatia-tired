import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        No, never
        <br />
      </h1>
      <img
        src="https://media3.giphy.com/media/KCY0yALOOQ5gP6l1a5/giphy-downsized.gif?cid=7053c1daqx6nsqa9wzcbjf18ql43b1u2gu3juyo81zsjzigz&rid=giphy-downsized.gif&ct=g"
        alt="modric"
      />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
