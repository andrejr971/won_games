import Button from 'components/Button';
import { Content, SubTitle, Title, Wrapper, FloatImage } from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonLabel: string;
  buttonLink: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};

export default function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right',
}: HighlightProps) {
  return (
    <Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Content>

      {!!floatImage && <FloatImage src={floatImage} alt={title} />}
    </Wrapper>
  );
}
