import { gql } from '@apollo/client';

export const GameFrament = gql`
  fragment GameFrament on Game {
    name
    slug
    developers {
      name
    }
    plataforms {
      name
    }
    cover {
      url
    }
    price
  }
`;
