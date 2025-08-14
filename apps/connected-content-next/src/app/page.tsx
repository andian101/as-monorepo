import { Article } from "@/components/Article";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getClient } from "@/graphQl/apollo-client";
import { GET_ARTICLE } from "@/graphQl/query";

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_ARTICLE,
    variables: { id: "5dXCCTWpiaRLlaPJal5WTi" }
    // variables: { id: "RK80bbYMMKn4NosfBGqA7" }
  });

  console.log("Article Data:", data.articlePage);
  return (
    <>
      <Header />;
      <article>
        <Article data={data.articlePage} />
      </article>
      <Footer />;
    </>
  );
}
