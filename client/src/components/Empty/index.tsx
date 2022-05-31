import Button from 'components/Button';
import Link from 'next/link';

import { Wrapper, Description, Image, Title } from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <Wrapper>
    <Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <Title>{title}</Title>
    <Description>{description}</Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </Wrapper>
);

export default Empty;
