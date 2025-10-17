import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
  query GetArticleBySlug($slug: String!, $locale: String) {
    articlePageCollection(where: { slug: $slug }, limit: 1, locale: $locale) {
      items {
        layout
        descriptionTitle

        descriptionContent {
          json
        }
        fixedContentTitle
        fixedContentContent {
          json
        }

        largeLinksGroupCollection {
          items {
            largeLinkTitle
            largeLinkText
            link
          }
        }

        hero {
          heroTitle
          text {
            json
          }
          image
        }
        articleElementsCollection {
          items {
            __typename
            ... on Accordian {
              title
              content {
                json
              }
            }
            ... on TextField {
              title
              content {
                json
              }
            }
            ... on SupportBox {
              title
              content {
                json
              }
            }
          }
        }

        redirect {
          slug
        }

        shopCollection {
          items {
            cardTitle_data {
              id
              title
              description
              onlineStoreUrl
              featuredImage {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TRIAL = gql`
  query GetTrialBySlug($slug: String!) {
  trialCollection(where: {slug: $slug} ) {
    items {
      trialTitle,
      trialAcronym,
  		types,
      status,
      phase,
      details {
        json
      }
      accordionsCollection {
        items {
          title,
          content {
            json
          }
        }
      }
      startDate,
      endDate,
      footerText {
        json
      }
    }
  }
}
`;

export const SEARCH_TRIALS = gql`
  query SearchTrials($searchTerm: String!) {
    trialCollection(
      limit: 50,
      order: [sys_publishedAt_DESC, trialTitle_ASC],
      where: {
        OR: [
          { trialTitle_contains: $searchTerm },    # Search in the Title field
          { trialAcronym_contains: $searchTerm },  # Search in the Content field
          { details_contains: $searchTerm }      # Search in the Type field
        ]
      }
    ) {
      total
      items {
        sys {
          id
        }
        trialTitle
        trialAcronym
        status
        types
        phase
        slug
      }
    }
  }
`;

export const GET_HOMEPAGE = gql`
  query GetHomePage($locale: String) {
    homePageCollection(limit: 1, locale: $locale) {
      items {
        homepageHeroLink
        homepageHeroImage
        homepageHeroTitle
        homepageHeroButton
        homepageHeroInfoText

        homepageBullet1 {
          json
        }
        homepageBullet2 {
          json
        }
        homepageBullet3 {
          json
        }
        whatWereDoingCardsCollection {
          items {
            __typename
            ... on Card {
              cardLink
              cardTitle
              cardImage
              cardContent {
                json
              }
              cardButtonText
            }
          }
        }
      }
    }
  }
`;

export const GET_NAV = gql`
  query GetLevels {
    level1Collection {
      items {
        title
        levelsCollection {
          items {
            _id
            sys {
              id
            }
            title
          }
        }
      }
    }
  }
`;

export const GET_ALL_SUB_NAV = gql`
  query GetAllLevel2 {
    level2Collection(limit: 1) {
      items {
        title
        _id
        list1Collection {
          items {
            descriptionTitle
            slug
          }
        }
        list2Collection {
          items {
            descriptionTitle
            slug
          }
        }
        articleCollection {
          items {
            descriptionTitle
            slug
          }
        }
      }
    }
  }
`;

// export const GET_SUB_NAV = gql`
//   query GetSingleLevel2ById($id: String!) {
//     level2(id: $id) {
//       _id
//       title
//       articleCollection {
//         items {
//           descriptionTitle
//           slug
//         }
//       }
//     }
//   }
// `;
