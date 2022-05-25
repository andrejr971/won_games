import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { Menu } from 'components/Menu';

import { Content, SectionFooter, Wrapper } from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

export default function Base({ children }: BaseTemplateProps) {
  return (
    <Wrapper>
      <Container>
        <Menu />
      </Container>

      <Content>{children}</Content>

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </Wrapper>
  );
}
