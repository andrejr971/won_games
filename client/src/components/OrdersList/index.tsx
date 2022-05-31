import Empty from 'components/Empty';
import GameItem, { GameItemProps } from 'components/GameItem';
import Heading from 'components/Heading';
import { Wrapper } from './styles';

export type OrdersListProps = {
  items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map(item => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </Wrapper>
);

export default OrdersList;
