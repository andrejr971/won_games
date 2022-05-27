import { GetServerSideProps } from 'next';
import filterItemsMock from 'components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

import GamesTemplate, { GamesTemplateProps } from 'templates/Games';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<GamesTemplateProps> = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  };
};
