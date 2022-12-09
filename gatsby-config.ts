import type { GatsbyConfig } from "gatsby";
const siteAddress = new URL("https://www.arecroatiatired.com");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Are Croatia Tired`,
    siteUrl: siteAddress.href,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "are-croatia-tired",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
  ],
};

export default config;
