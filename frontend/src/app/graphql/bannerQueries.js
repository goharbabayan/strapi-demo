import { gql } from '@apollo/client';

const GET_BANNER_QUERIES = gql`
  query {
    home {
      Banner {
        link
        heading
        Button {
          title
          link
        }
        image_for_desktop {
          url
          alternativeText
          name
          width
          height
        }
        image_for_mobile {
          url
          alternativeText
          name
          width
          height
        }
      }
    }
  }
`;

export { GET_BANNER_QUERIES };
