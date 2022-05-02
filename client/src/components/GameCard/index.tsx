import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite,
} from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';

import {
  BuyBox,
  Content,
  Developer,
  FavButton,
  ImageBox,
  Info,
  Price,
  Title,
  Wrapper,
} from './styles';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

export default function GameCard({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GameCardProps) {
  return (
    <Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>
      <Content>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>
        </Info>
        <FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from wishlist" />
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
}
