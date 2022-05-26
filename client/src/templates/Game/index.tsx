import { Divider } from 'components/Divider';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import { GameCardProps } from 'components/GameCard';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import TextContent from 'components/TextContent';

import Base from 'templates/Base';

import {
  Cover,
  Main,
  SectionDescription,
  SectionGallery,
  SectionGameDetails,
  SectionGameInfo,
} from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

export default function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  recommendedGames,
  upcomingGames,
  upcomingHighlight,
}: GameTemplateProps) {
  return (
    <Base>
      <Cover src={cover} role="image" aria-label="cover" />

      <Main>
        <SectionGameInfo>
          <GameInfo {...gameInfo} />
        </SectionGameInfo>

        <SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </SectionGallery>

        <SectionDescription>
          <TextContent content={description} />
        </SectionDescription>

        <SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </SectionGameDetails>

        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title="You may like these games" games={recommendedGames} />
      </Main>
    </Base>
  );
}
