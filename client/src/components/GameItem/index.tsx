import { Download } from '@styled-icons/boxicons-solid/Download';

export type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type GameItemProps = {
  img: string;
  title: string;
  price: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};

import {
  CardInfo,
  Content,
  DownloadLink,
  GameContent,
  ImageBox,
  PaymentContent,
  Price,
  Title,
  Wrapper,
} from './styles';

export default function GameItem({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}: GameItemProps) {
  return (
    <Wrapper>
      <GameContent>
        <ImageBox>
          <img src={img} alt={title} />
        </ImageBox>

        <Content>
          <Title>
            {title}
            {!!downloadLink && (
              <DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </DownloadLink>
            )}
          </Title>
          <Price>{price}</Price>
        </Content>
      </GameContent>

      {!!paymentInfo && (
        <PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </CardInfo>
        </PaymentContent>
      )}
    </Wrapper>
  );
}
