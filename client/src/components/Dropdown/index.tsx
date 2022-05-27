import { useState } from 'react';
import { Content, Title, Wrapper } from './styles';

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function Dropdown({ children, title }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Title onClick={() => setIsOpen(!isOpen)}>{title}</Title>

      <Content aria-hidden={!isOpen} onMouseLeave={() => setIsOpen(false)}>
        {children}
      </Content>
    </Wrapper>
  );
}
