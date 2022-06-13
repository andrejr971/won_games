import Link from 'next/link';
import Button from 'components/Button';
import GameItem from 'components/GameItem';

import { Wrapper, Footer, Total, Loading, GamesList } from './styles';

import Empty from 'components/Empty';
import { useCart } from 'hooks/use-cart';
import Loader from 'components/Loader';

export type CartListProps = {
  hasButton?: boolean;
};

const CartList = ({ hasButton = false }: CartListProps) => {
  const { total, items, loading } = useCart();

  if (loading) {
    return (
      <Loading>
        <Loader />
      </Loading>
    );
  }

  return (
    <Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          <GamesList>
            {items.map(item => (
              <GameItem key={item.title} {...item} />
            ))}
          </GamesList>

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
};

export default CartList;
