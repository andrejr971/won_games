import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import { ButtonsWrapper, Description, Wrapper } from './styles';

export type GameInfoProps = {
  title: string;
  price: string;
  description: string;
};

export default function GameInfo({ title, price, description }: GameInfoProps) {
  return (
    <Wrapper>
      <Heading color="black" lineBottom lineColor="primary">
        {title}
      </Heading>

      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <Description>{description}</Description>

      <ButtonsWrapper>
        <Button icon={<AddShoppingCart />} size="large">
          Add to cart
        </Button>
        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}
