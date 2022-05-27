import Button from 'components/Button';
import Empty from 'components/Empty';
import GameItem, { GameItemProps } from 'components/GameItem';
import Link from 'next/link';

import { Wrapper, Footer, Total } from './styles';

export type CartListProps = {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
};

export default function CartList({
  items = [],
  total,
  hasButton,
}: CartListProps) {
  return (
    <Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map(item => (
            <GameItem key={item.title} {...item} />
          ))}

          <Footer>
            {!hasButton && <span>Total:</span>}
            <Total>{total}</Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      )}
    </Wrapper>
  );
}
