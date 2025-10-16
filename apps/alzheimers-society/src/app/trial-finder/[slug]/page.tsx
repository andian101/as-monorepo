// import { Article } from "@/components/Article";
// import { Article as ArticleSingleCol } from "@/components/ArticleSingleCol";
// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
import { getClient } from "@/graphQl/apollo-client";
// import { GET_ARTICLE } from "@/graphQl/query";
// import { redirect } from "next/navigation";
// import { GET_ALL_SUB_NAV, GET_HOMEPAGE, GET_NAV } from "@/graphQl/query";

export default async function TrialPage({ params }) {
  const { slug } = await params;
  const client = getClient();
  // const { data } = await client.query({
  //   query: GET_ARTICLE,
  //   variables: { slug }
  // });

  // console.log(data);

  return (
    <>
      <div>
        Hello trial
        {/* {data?.items[0]?.title} */}
      </div>
    </>
  );
}
