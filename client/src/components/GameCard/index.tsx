import Link from 'next/link';

import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';

import {
  Wrapper,
  BuyBox,
  Content,
  Developer,
  FavButton,
  ImageBox,
  Info,
  Price,
  Title,
} from './styles';
import formatPrice from 'utils/format-price';
import CartButton from 'components/CartButton';

export type GameCardProps = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  onFav?: () => void;
};

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav,
}: GameCardProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`games/${slug}`} passHref>
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>
    </Link>
    <Content>
      <Link href={`games/${slug}`} passHref>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>
        </Info>
      </Link>
      <FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && (
          <Price isPromotional>{formatPrice(price)}</Price>
        )}
        <Price>{formatPrice(promotionalPrice || price)}</Price>

        <CartButton id={id} />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;
