import { useRouter } from 'next/router';

import { Container } from 'components/Container';
import Heading from 'components/Heading';
import ProfileMenu from 'components/ProfileMenu';
import Base from 'templates/Base';

import { Content, Main } from './styles';

export type ProfileTemplateProps = {
  children: React.ReactNode;
};

export default function Profile({ children }: ProfileTemplateProps) {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <Main>
          <ProfileMenu activeLink={asPath} />
          <Content>{children}</Content>
        </Main>
      </Container>
    </Base>
  );
}
