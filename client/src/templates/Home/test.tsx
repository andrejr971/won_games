import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import { Home } from '.';

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock,
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render banner and showcase', () => {
    renderWithTheme(<Home {...props} />);

    // // menu
    // expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // // footer
    // expect(
    //   screen.getByRole('heading', { name: /follow us/i }),
    // ).toBeInTheDocument();

    // // logos (menu/footer)
    // expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    // expect(
    //   screen.getByRole('heading', { name: /most popular/i }),
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole('heading', { name: /upcomming/i }),
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole('heading', { name: /free games/i }),
    // ).toBeInTheDocument();

    // // banner
    // expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // // card game ( 5 sections com 1 card cada = 5x1 = 5)
    // expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    // // highlight
    // expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);

    // expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5);
    // expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
  });
});
