import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import { Wrapper, ButtonsWrapper, Description } from './styles';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <Wrapper>
    <Heading color="black" lineBottom>
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

export default GameInfo;
