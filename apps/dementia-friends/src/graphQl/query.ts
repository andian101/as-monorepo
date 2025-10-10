import { gql } from "@apollo/client";

export const GET_LANDING_PAGE = gql`
  query GetLandingPage {
    landingPageCollection(limit: 1) {
      items {
        title
        articlesCollection {
          items {
            title
            image {
              url
            }
            link
            content {
              json
            }
            linkText
          }
        }
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticleBySlug($slug: String!) {
    articlePageCollection(where: { slug: $slug }, limit: 1) {
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
          heroImage {
            fileName
            url
          }
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
      }
    }
  }
`;
