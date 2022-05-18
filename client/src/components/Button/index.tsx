import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
import { Wrapper, WrapperProps } from './styles';

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonType;

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    as,
    ...props
  },
  ref,
) => (
  <Wrapper
    as={as}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default forwardRef(Button);
