/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Landing } from "@/components/landing";
import { getClient } from "@/graphQl/apollo-client";
import { GET_LANDING_PAGE } from "@/graphQl/query";

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_LANDING_PAGE
  });
  const items = data?.landingPageCollection?.items[0];

  return <Landing articles={items?.articlesCollection?.items} />;
}
