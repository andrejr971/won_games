import Link from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { Nav, NavLink } from './styles';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

export default function ProfileMenu({ activeLink }: ProfileMenuProps) {
  return (
    <Nav>
      <Link href="/profile/me" passHref>
        <NavLink isActive={activeLink === '/profile/me'} title="My Profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </NavLink>
      </Link>

      <Link href="/profile/cards" passHref>
        <NavLink isActive={activeLink === '/profile/cards'} title="My Cards">
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

      <Link href="/profile/logout" passHref>
        <NavLink title="Sign out">
          <ExitToApp size={24} />
          <span>Sign out</span>
        </NavLink>
      </Link>
    </Nav>
  );
}
