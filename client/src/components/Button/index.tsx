import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Wrapper } from './styles';

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonType;

export default function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  as,
  ...props
}: ButtonProps) {
  return (
    <Wrapper
      as={as}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </Wrapper>
  );
}
