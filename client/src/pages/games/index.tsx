import { GetStaticProps } from 'next';
import { QUERY_GAMES } from 'graphql/queries/games';

import filterItemsMock from 'components/ExploreSidebar/mock';

import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import { initializeApollo } from 'utils/apollo';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<GamesTemplateProps> = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9,
    },
  });

  const games = data.games.map(game => ({
    title: game.name,
    developer: game.developers[0].name,
    price:
      game.price > 0
        ? new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(game.price)
        : 'free',
    img: `http://localhost:1337${game.cover!.url}`,
  }));

  return {
    props: {
      games,
      filterItems: filterItemsMock,
    },
    revalidate: 60,
  };
};
