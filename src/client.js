import sanityClient, { SanityClient, createClient } from "@sanity/client";
import urlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9hnb8f0r",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
  token:
    "skDwjNHYNgdWmZ4lmbcM5e0sG9bhfMvroEV4YvWWnypYC3QCQhcjTfSqs10GrOOwunt1NPVvfEI8UPyQhasax3onz8Em67cWdHh3TzLLtcfdeZtwOCpOqZXs9vGwJVMFCvhQFRtxfG0ImMhgsKBvr6FBpj8cVRed08km3zWSnNOXFM1MqILQ",
});

const builder = urlBuilder(client);

export const urlFor = (source) => builder.image(source);
