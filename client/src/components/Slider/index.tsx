import SlickSlider, { Settings } from 'react-slick';

import { Wrapper } from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

export default function Slider({ children, settings }: SliderProps) {
  return (
    <Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Wrapper>
  );
}
