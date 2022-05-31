import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import Button from 'components/Button';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

import { Wrapper, Caption, Image, Subtitle, Title } from './styles';

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
}: BannerProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Image src={img} role="img" aria-label={title} />

    <Caption>
      <Title>{title}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </Caption>
  </Wrapper>
);

export default Banner;
