import * as React from "react";

interface IProps {
  handleChange: (value: string) => void;
  value: string;
};

const ContentType = (props: IProps) => {
  const {handleChange, value} = props;
  return (
    <select value={value} onChange={event => handleChange(event.target.value)}>
      <option value="word">Words</option>
      <option value="line">Lines</option>
      <option value="paragraph">Paragraphs</option>
    </select>
  );
}

export default ContentType;
