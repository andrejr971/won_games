import Link from 'next/link';

import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';

import {
  CreateAccount,
  IconWrapper,
  LogoWrapper,
  MenuFull,
  MenuGroup,
  MenuLink,
  MenuNav,
  RegisterBox,
  Wrapper,
} from './styles';

export type MenuProps = {
  username?: string;
};

export function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </IconWrapper>
      </MediaMatch>

      <LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link href="/games" passHref>
            <MenuLink>Explore</MenuLink>
          </Link>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="search" />
        </IconWrapper>

        <IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>

          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>

            <span>or</span>

            <Link href="/sign-up" passHref>
              <CreateAccount title="Sign Up">Sign Up</CreateAccount>
            </Link>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  );
}
