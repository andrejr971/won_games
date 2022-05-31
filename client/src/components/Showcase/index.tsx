import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import { GameCardProps } from 'components/GameCard';
import Highlight, { HighlightProps } from 'components/Highlight';

import { Wrapper } from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
};

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </Wrapper>
);

export default Showcase;
