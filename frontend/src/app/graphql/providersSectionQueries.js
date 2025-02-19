import { gql } from '@apollo/client';

const GET_POPULAR_PROVIDERS_QUERIES = gql`
  query {
    home {
      Popular_Providers {
        heading
        providers {
          documentId
          username
          name
          lastName
          age
          placeOfService
          dressSize
          hairColor
          isApprovedByAdmin
          availableNow
          digitalService
          badge
          verificationStatus {
            hasBronzeBadge
            hasSilverBadge
            hasGoldBadge
          }
          role {
            type
          }
          incall {
            general {
              id
              duration
              price
              additionalInfo
              }
            GFE {
                id
              duration
              price
              additionalInfo
              }
            PSE {
              id
            duration
            price
            additionalInfo
            }
          }
          outcall {
            general {
              id
              duration
              price
              additionalInfo
              }
            GFE {
                id
              duration
              price
              additionalInfo
              }
            PSE {
              id
            duration
            price
            additionalInfo
            }
          }
          profilePicture {
            name
            alternativeText
            width
            height
            url
          }
        }
      }
    }
  }
`;

const GET_TOP_PROVIDERS_QUERIES = gql`
  query {
    home {
      Top_Providers {
        heading
        providers {
          documentId
          username
          name
          lastName
          age
          placeOfService
          dressSize
          hairColor
          badge
          isApprovedByAdmin
          availableNow
          digitalService
          verificationStatus {
            hasBronzeBadge
            hasSilverBadge
            hasGoldBadge
          }
          role {
            type
          }
          incall {
            general {
              id
              duration
              price
              additionalInfo
              }
            GFE {
                id
              duration
              price
              additionalInfo
              }
            PSE {
              id
            duration
            price
            additionalInfo
            }
          }
          outcall {
            general {
              id
              duration
              price
              additionalInfo
              }
            GFE {
                id
              duration
              price
              additionalInfo
              }
            PSE {
              id
            duration
            price
            additionalInfo
            }
          }
          profilePicture {
            name
            alternativeText
            width
            height
            url
          }
        }
      }
    }
  }
`;

const GET_PROVIDERS_BY_TYPE_QUERIES = gql`
  query {
    home {
      Find_By_Type {
        heading
        show_categories_in_the_center
        categories {
          name
          link
          id
        }
        providers (pagination: { pageSize: 12 }) {
          documentId
          username
          name
          lastName
          age
          placeOfService
          dressSize
          hairColor
          badge
          isApprovedByAdmin
          availableNow
          digitalService
          verificationStatus {
            hasBronzeBadge
            hasSilverBadge
            hasGoldBadge
          }
          role {
            type
          }
          incall {
            general {
              id
              duration
              price
              additionalInfo
              }
            GFE {
                id
              duration
              price
              additionalInfo
              }
            PSE {
              id
            duration
            price
            additionalInfo
            }
          }
          outcall {
            general {
              id
              duration
              price
              additionalInfo
              }
            GFE {
                id
              duration
              price
              additionalInfo
              }
            PSE {
              id
            duration
            price
            additionalInfo
            }
          }
          profilePicture {
            name
            alternativeText
            width
            height
            url
          }
        }
        Button {
          title
          link
        }
      }
    }
  }
`;

export { GET_POPULAR_PROVIDERS_QUERIES, GET_TOP_PROVIDERS_QUERIES, GET_PROVIDERS_BY_TYPE_QUERIES };
