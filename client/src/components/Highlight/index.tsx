import Button from 'components/Button';
import { Wrapper, Content, FloatImage, SubTitle, Title } from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: 'right' | 'left';
};

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right',
}: HighlightProps) => (
  <Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <FloatImage src={floatImage} alt={title} />}
    <Content>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Content>
  </Wrapper>
);

export default Highlight;
