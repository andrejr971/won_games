import Button from 'components/Button';
import Link from 'next/link';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

import { Wrapper, Image, Title, Description } from './styles';

export default function Empty({ title, description, hasLink }: EmptyProps) {
  return (
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
}
