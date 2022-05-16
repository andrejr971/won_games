import { InputHTMLAttributes } from 'react';

import { Input, Label, Wrapper } from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: 'white' | 'black';
  labelFor?: string;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Radio({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) {
  function onChange() {
    !!onCheck && onCheck(value);
  }

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
}
