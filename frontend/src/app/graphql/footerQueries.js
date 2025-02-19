import { gql } from '@apollo/client';

const GET_FOOTER_QUERIES = gql`
  query {
    footer {
      logo {
        alternativeText
        url
        width
        height
      }
      description
      navigation(pagination: { limit: 20}) {
        name
        url
      }
    }
  }
`;

export { GET_FOOTER_QUERIES };
