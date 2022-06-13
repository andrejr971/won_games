import CartIcon from 'components/CartIcon';
import CartList from 'components/CartList';
import Dropdown from 'components/Dropdown';

import { Wrapper } from './styles';

const CartDropdown = () => (
  <Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </Wrapper>
);

export default CartDropdown;
