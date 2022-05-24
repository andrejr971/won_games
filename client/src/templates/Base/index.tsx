import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { Menu } from 'components/Menu';
import { SectionFooter } from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

export default function Base({ children }: BaseTemplateProps) {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      {children}

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </section>
  );
}
