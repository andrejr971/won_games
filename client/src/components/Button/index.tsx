import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { Wrapper, WrapperProps } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref,
) => (
  <Wrapper
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
