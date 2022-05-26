import GameItem, { GameItemProps } from 'components/GameItem';

import { Wrapper, Footer, Total } from './styles';

export type CartListProps = {
  items: GameItemProps[];
  total: string;
};

export default function CartList({ items, total }: CartListProps) {
  return (
    <Wrapper>
      {items.map(item => (
        <GameItem key={item.title} {...item} />
      ))}

      <Footer>
        Total <Total>{total}</Total>
      </Footer>
    </Wrapper>
  );
}
