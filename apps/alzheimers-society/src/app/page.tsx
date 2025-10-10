import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomepageHero } from "@/components/HomepageHero";
import { HomepageBullets } from "@/components/HomepageBullets";
import { getClient } from "@/graphQl/apollo-client";
import { GET_ALL_SUB_NAV, GET_HOMEPAGE, GET_NAV } from "@/graphQl/query";
import { Card } from "@/components/Card";

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_HOMEPAGE
  });
  const homepageData = data.homePageCollection.items[0];

  const { data: navigationData } = await client.query({
    query: GET_NAV
  });

  const { data: subNavigationData } = await client.query({
    query: GET_ALL_SUB_NAV
  });

  const navData = navigationData.level1Collection.items.map((el) => ({
    title: el.title,
    subNavs: el.levelsCollection?.items?.map((f) => f._id)
  }));
  const subNavData = subNavigationData.level2Collection.items;

  const {
    homepageBullet1,
    homepageBullet2,
    homepageBullet3,
    homepageHeroLink,
    homepageHeroTitle,
    homepageHeroButton,
    homepageHeroImage,
    homepageHeroInfoText,
    whatWereDoingCardsCollection
  } = homepageData;

  return (
    <>
      <Header data={navData} subNavData={subNavData} />
      <HomepageHero
        link={homepageHeroLink}
        image={homepageHeroImage}
        title={homepageHeroTitle}
        button={homepageHeroButton}
        infoText={homepageHeroInfoText}
      />
      <HomepageBullets
        bullets={[homepageBullet1, homepageBullet2, homepageBullet3]}
      />
      <div
        className='layout layout--onecol paragraph--navigation-contents'
        style={{ marginTop: "3rem", marginBottom: "6rem" }}
      >
        <div className='layout__region layout__region--content'>
          <h2 className='title is-2' data-content-type='title'>
            What we're doing now
          </h2>
        </div>

        <div className='field--field-paragraph-content-items is-fullwidth-extended'>
          <div className='container'>
            <div className='columns is-multiline is-centered'>
              {whatWereDoingCardsCollection.items.map((card, index) => (
                <div key={index} className='column is-one-third'>
                  <Card
                    key={index}
                    image={card.cardImage[0].url}
                    title={card.cardTitle}
                    text={card.cardContent}
                    buttonText={card.cardButtonText}
                    link={card.cardLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
