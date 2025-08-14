import { Article } from "@/components/Article";
import { Article as ArticleSingleCol } from "@/components/ArticleSingleCol";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getClient } from "@/graphQl/apollo-client";
import { GET_ARTICLE } from "@/graphQl/query";

export default async function ArticlePageId({ params }) {
  const { id } = await params;

  const client = getClient();
  const { data } = await client.query({
    query: GET_ARTICLE,
    variables: { slug: id }
  });

  const article = data.articlePageCollection.items[0];

  return (
    <>
      <Header />
      <article>
        {article?.layout === "Single" ? (
          <ArticleSingleCol data={article} />
        ) : (
          <Article data={article} />
        )}
      </article>
      <Footer />;
    </>
  );
}
