import React from 'react'
import InputContainer from './InputContainer'
import Input from './Input'
import Label from './Label'

const CustomInputComponent = (props) => {
  const { onChange, value, label } = props;
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        returnKeyType='next'
        onChange={onChange}
        placeholder={value}
        value={value}
      />
      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
    </InputContainer>
  );
};

export default CustomInputComponent
