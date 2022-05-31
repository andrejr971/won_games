import Link from 'next/link';
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp,
} from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

import Dropdown from 'components/Dropdown';

import { Username, Link as NavLink, Nav } from './styles';

export type UserDropdownProps = {
  username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <Username>{username}</Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <Nav>
      <Link href="/profile/me" passHref>
        <NavLink>
          <AccountCircle />
          <span>My profile</span>
        </NavLink>
      </Link>
      <Link href="/wishlist" passHref>
        <NavLink title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </NavLink>
      </Link>

      <Link href="/logout" passHref>
        <NavLink title="Sign out">
          <ExitToApp />
          <span>Sign out</span>
        </NavLink>
      </Link>
    </Nav>
  </Dropdown>
);

export default UserDropdown;
