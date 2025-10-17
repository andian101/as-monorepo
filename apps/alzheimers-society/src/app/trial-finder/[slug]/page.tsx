import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TrialSearch } from "@/components/TrialSearch";
import { getClient } from "@/graphQl/apollo-client";
import { GET_ALL_SUB_NAV, GET_NAV, GET_TRIAL, SEARCH_TRIALS } from "@/graphQl/query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function TrialPage({ params }) {
  const { slug } = await params;
  const client = getClient();
  const { data } = await client.query({
    query: GET_TRIAL,
    variables: { slug }
  });

  const trial = data?.trialCollection?.items[0];

    const { data: navigationData } = await client.query({ query: GET_NAV });
    const { data: subNavigationData } = await client.query({
      query: GET_ALL_SUB_NAV
    });
    const navData = navigationData.level1Collection.items.map((el) => ({
      title: el.title,
      subNavs: el.levelsCollection?.items?.map((f) => f._id)
    }));
    const subNavData = subNavigationData.level2Collection?.items;

  return (
    <>
    <Header data={navData} subNavData={subNavData} />

      <TrialSearch />

      <div>
        <h1>{trial?.trialTitle}</h1>
        <p>{trial?.trialAcronym}</p>
        <p>Status: {trial?.status}</p>
        <p>Phase: {trial?.phase}</p>
        <p>Types: {trial?.types}</p>

        {/* Trial Details */}
        <h2>Details</h2>
        <div>
          {trial?.details?.json && documentToReactComponents(trial.details.json)}
        </div>

        {/* Accordions */}
        {trial?.accordionsCollection?.items?.map((accordion, index) => (
          <div key={index}>
            <h3>{accordion.title}</h3>
            <div>
              {accordion.content?.json && documentToReactComponents(accordion.content.json)}
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
