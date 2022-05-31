import { useState } from 'react';
import { Add, ShoppingCart } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Radio from 'components/Radio';

import {
  Wrapper,
  AddCard,
  Body,
  CardInfo,
  CardItem,
  CardsList,
  Footer,
} from './styles';

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper>
      <Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <CardsList>
          {cards?.map(card => (
            <CardItem key={card.number}>
              <CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </CardItem>
          ))}

          <AddCard role="button">
            <Add size={14} /> Add a new credit card
          </AddCard>
        </CardsList>
      </Body>
      <Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default PaymentOptions;
