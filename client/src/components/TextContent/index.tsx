import Heading from 'components/Heading';
import { Wrapper } from './styles';

export type TextContentProps = {
  title?: string;
  content: string;
};

export default function TextContent({ title, content }: TextContentProps) {
  return (
    <Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  );
}
