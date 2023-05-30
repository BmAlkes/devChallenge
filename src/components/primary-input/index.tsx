import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { SearcIcon } from "../Icons/search-icon";
import { PrimaryInput, PrimaryInputSerch } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLHtmlElement> {
  value: string;
  handleChange: (value: string) => void;
}
export const Input = (props: InputProps) => {
  return (
    <PrimaryInputSerch>
      <PrimaryInput
        onChange={(e) => props.handleChange(e.target.value)}
        {...props}
      />
      <SearcIcon />
    </PrimaryInputSerch>
  );
};
