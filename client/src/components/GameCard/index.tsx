import Link from 'next/link';

import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import Button from 'components/Button';

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

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  onFav?: () => void;
};

const GameCard = ({
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
        {!!promotionalPrice && <Price isPromotional>{price}</Price>}
        <Price>{promotionalPrice || price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;
