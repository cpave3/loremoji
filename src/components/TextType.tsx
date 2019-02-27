import * as React from 'react';

interface IProps {
  handleChange: (value: boolean) => void;
  value: boolean;
};

const TextType = (props: IProps) => {
  const {handleChange, value} = props;
  return (
    <div className="inline-block cursor-pointer" role="presentation" onClick={() => handleChange(!value)}>
      <span className="text-grey">
        { `${(value ? 'Multibyte' : 'Plain')}` }
      </span>
      <span> text</span>
    </div>
  );
}

export default TextType;
