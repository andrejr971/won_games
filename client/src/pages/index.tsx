/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Home, { HomeTemplateProps } from 'templates/Home';
import { initializeApollo } from 'utils/apollo';
import { GetStaticProps } from 'next';
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const { data } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY,
    },
  });

  // retorno dos dados
  return {
    props: {
      banners: bannerMapper(data.banners),
      newGames: gamesMapper(data.newGames),
      mostPopularHighlight: highlightMapper(
        data.sections?.popularGames?.highlight,
      ),
      mostPopularGames: gamesMapper(data.sections?.popularGames?.games),
      upcomingGames: gamesMapper(data.upcomingGames),
      upcomingHighlight: highlightMapper(
        data.sections?.upcomingGames?.highlight,
      ),
      freeGames: gamesMapper(data.freeGames),
      freeHighlight: highlightMapper(data.sections?.freeGames?.highlight),
      freeGamesTitle: data.sections?.freeGames?.title,
      mostPouplarGamesTitle: data.sections?.popularGames?.title,
      newGamesTitle: data.sections?.newGames?.title,
      upcomingGamesTitle: data.sections?.upcomingGames?.title,
    },
    revalidate: 60,
  };
};
