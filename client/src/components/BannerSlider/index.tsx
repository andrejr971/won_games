import Banner, { BannerProps } from 'components/Banner';
import Slider, { SliderSettings } from 'components/Slider';

import { Wrapper } from './styles';

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export default function BannerSlider({ items }: BannerSliderProps) {
  return (
    <Wrapper>
      <Slider settings={settings}>
        {items.map(item => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </Wrapper>
  );
}
