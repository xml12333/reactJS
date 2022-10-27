import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "metjhrz5",
  dataset: "production",
  apiVersion: "1",
  useCdn: true,
  token: process.env.NEXT__PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
