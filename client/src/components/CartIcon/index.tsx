import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

import { Badge, Wrapper } from './styles';

export type CartIconProps = {
  quantity?: number;
};

export default function CartIcon({ quantity = 0 }: CartIconProps) {
  return (
    <Wrapper>
      {quantity > 0 && <Badge aria-label="Cart Items">{quantity}</Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </Wrapper>
  );
}
