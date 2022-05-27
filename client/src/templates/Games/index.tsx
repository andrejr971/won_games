import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';
import Base from 'templates/Base';

import { Main, ShowMore } from './styles';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

export default function GamesTemplate({
  games = [],
  filterItems,
}: GamesTemplateProps) {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Base>
      <Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map(game => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>

          <ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </ShowMore>
        </section>
      </Main>
    </Base>
  );
}
