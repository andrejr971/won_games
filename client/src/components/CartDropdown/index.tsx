import CartIcon from 'components/CartIcon';
import CartList from 'components/CartList';
import Dropdown from 'components/Dropdown';
import { GameItemProps } from 'components/GameItem';

import { Wrapper } from './styles';

export type CartDropdownProps = {
  items?: GameItemProps[];
  total?: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </Wrapper>
);

export default CartDropdown;
