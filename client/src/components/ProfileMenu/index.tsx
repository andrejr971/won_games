import Link from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';
import { Link as NavLink, Nav } from './styles';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <Nav>
    <Link href="/profile/me" passHref>
      <NavLink isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </NavLink>
    </Link>

    <Link href="/profile/cards" passHref>
      <NavLink isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </NavLink>
    </Link>

    <Link href="/profile/orders" passHref>
      <NavLink isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </NavLink>
    </Link>

    <Link href="/logout" passHref>
      <NavLink>
        <ExitToApp size={24} title="Sign out" />
        <span>Sign out</span>
      </NavLink>
    </Link>
  </Nav>
);

export default ProfileMenu;
