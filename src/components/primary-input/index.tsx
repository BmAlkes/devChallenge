import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { SearcIcon } from "../Icons/search-icon";
import { PrimaryInput, PrimaryInputSerch } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}
export const Input = (props: InputProps) => {
  return (
    <PrimaryInputSerch>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearcIcon />
    </PrimaryInputSerch>
  );
};
