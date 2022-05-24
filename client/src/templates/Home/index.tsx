import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { Menu } from 'components/Menu';
import Showcase from 'components/Showcase';

import {
  SectionBanner,
  SectionFooter,
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
        <Showcase title="News" games={newGames} />
      </SectionNews>

      <Showcase
        title="Most popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <SectionUpcoming>
        <Showcase title="Upcomming" games={upcommingGames} />
        <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
      </SectionUpcoming>

      <Showcase
        title="Free games"
        highlight={freeHighligth}
        games={freeGames}
      />

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </section>
  );
}
