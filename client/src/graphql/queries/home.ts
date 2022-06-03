import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/banner';
import { GameFrament } from 'graphql/fragments/game';
import { HighlightFragment } from 'graphql/fragments/highlight';

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners(sort: "id") {
      ...BannerFragment
    }
    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFrament
    }
    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFrament
    }
    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 8) {
      ...GameFrament
    }
    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games(limit: 8) {
          ...GameFrament
        }
      }
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFrament}
  ${HighlightFragment}
`;
