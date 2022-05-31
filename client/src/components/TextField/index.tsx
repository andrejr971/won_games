import { useState, InputHTMLAttributes } from 'react';
import { Wrapper, Error, Icon, Input, InputWrapper, Label } from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <Wrapper disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </InputWrapper>
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextField;
