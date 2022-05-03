import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';
import { Menu } from 'components/Menu';

import {
  SectionBanner,
  SectionFooter,
  SectionFreeGames,
  SectionMostPopular,
  SectionNews,
  SectionUpcoming,
} from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighligth: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighligth: HighlightProps;
};

export function Home({
  banners,
  freeGames,
  freeHighligth,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
}: HomeTemplateProps) {
  return (
    <section>
      <Container>
        <Menu />

        <SectionBanner>
          <BannerSlider items={banners} />
        </SectionBanner>
      </Container>

      <SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary" color="black">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </SectionNews>

      <Container>
        <SectionMostPopular>
          <Heading lineLeft lineColor="secondary" color="white">
            Most popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </SectionMostPopular>

        <SectionUpcoming>
          <Heading lineLeft lineColor="secondary" color="white">
            Upcomming
          </Heading>

          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighligth} />
          <GameCardSlider items={upcommingMoreGames} />
        </SectionUpcoming>

        <SectionFreeGames>
          <Heading lineLeft lineColor="secondary" color="white">
            Free games
          </Heading>

          <Highlight {...freeHighligth} />
          <GameCardSlider items={freeGames} />
        </SectionFreeGames>
      </Container>

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </section>
  );
}
