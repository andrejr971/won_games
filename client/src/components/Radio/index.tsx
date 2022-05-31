import { InputHTMLAttributes } from 'react';

import { Wrapper, Input, Label } from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: 'white' | 'black';
  labelFor?: string;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <Wrapper>
      <Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};

export default Radio;
