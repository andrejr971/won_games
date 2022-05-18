import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';

import {
  BannerBlock,
  BannerContent,
  BannerFooter,
  Content,
  ContentWrapper,
  Subtitle,
  Wrapper,
} from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export default function Auth({ title, children }: AuthProps) {
  return (
    <Wrapper>
      <BannerBlock>
        <BannerContent>
          <Link href="/">
            <a>
              <Logo id="banner" />
            </a>
          </Link>

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>

            <Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </Subtitle>
          </div>

          <BannerFooter>
            Won Games 2020 © Todos os Direitos Reservados
          </BannerFooter>
        </BannerContent>
      </BannerBlock>

      <Content>
        <ContentWrapper>
          <Link href="/">
            <a>
              <Logo color="black" size="large" id="content" />
            </a>
          </Link>

          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}
