import { Apple, Windows, Linux } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';

import {
  Block,
  Content,
  Description,
  Icon,
  IconsWrapper,
  Label,
  Wrapper,
} from './styles';

type Platform = 'windows' | 'linux' | 'mac';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  publisher: string;
  platforms: Platform[];
  releaseDate: string;
  rating: Rating;
  genres: string[];
};

export default function GameDetails({
  developer,
  releaseDate,
  platforms,
  rating,
  genres,
  publisher,
}: GameDetailsProps) {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />,
  };

  return (
    <Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <Content>
        <Block>
          <Label>Developer</Label>
          <Description>{developer}</Description>
        </Block>

        <Block>
          <Label>Release Date</Label>
          <Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </Description>
        </Block>

        <Block>
          <Label>Platforms</Label>
          <IconsWrapper>
            {platforms.map((icon: Platform) => (
              <Icon key={icon}>{platformIcons[icon]}</Icon>
            ))}
          </IconsWrapper>
        </Block>

        <Block>
          <Label>Publisher</Label>
          <Description>{publisher}</Description>
        </Block>

        <Block>
          <Label>Rating</Label>
          <Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </Description>
        </Block>

        <Block>
          <Label>Genres</Label>
          <Description>{genres.join(' / ')}</Description>
        </Block>
      </Content>
    </Wrapper>
  );
}
