
import { gql } from '@apollo/client';

const GET_NAVIGATION_QUERIES = gql`
  query {
    header {
      navigation {
        navigation_items {
          title
          link
          level_2(pagination: {limit: 100}) {
            id
            title
            link
            level_3(pagination: {limit: 100}) {
              id
              title
              link
            }
          }
        }
      }
    }
  }
`;

export { GET_NAVIGATION_QUERIES };
