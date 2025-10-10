import { Article } from "@/components/Article";
import { Article as ArticleSingleCol } from "@/components/ArticleSingleCol";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getClient } from "@/graphQl/apollo-client";
import { GET_ARTICLE } from "@/graphQl/query";
import { redirect } from "next/navigation";
import { GET_ALL_SUB_NAV, GET_HOMEPAGE, GET_NAV } from "@/graphQl/query";

export default async function ArticlePageId({ params, searchParams }) {
  const { id } = await params;
  const { locale } = await searchParams;
  const client = getClient();
  const { data } = await client.query({
    query: GET_ARTICLE,
    variables: { slug: id, locale }
  });

  const { data: navigationData } = await client.query({ query: GET_NAV });
  const { data: subNavigationData } = await client.query({
    query: GET_ALL_SUB_NAV
  });
  const navData = navigationData.level1Collection.items.map((el) => ({
    title: el.title,
    subNavs: el.levelsCollection?.items?.map((f) => f._id)
  }));
  const subNavData = subNavigationData.level2Collection?.items;

  const article = data.articlePageCollection?.items[0];

  if (article?.redirect) {
    return redirect("/about-dementia/" + article.redirect.slug);
  }

  return (
    <>
      <Header data={navData} subNavData={subNavData} />
      <article>
        {article?.layout === "Single" ? (
          <ArticleSingleCol data={article} locale={locale} id={id} />
        ) : (
          <Article data={article} locale={locale} id={id} />
        )}
      </article>
      <Footer />;
    </>
  );
}
