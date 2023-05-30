import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { SearcIcon } from "../search-icon";
import { PrimaryInput, PrimaryInputSerch } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLHtmlElement> {}
export const Input = (props: InputProps) => {
  return (
    <PrimaryInputSerch>
      <PrimaryInput placeholder="Look for something specific?" />
      <SearcIcon />
    </PrimaryInputSerch>
  );
};
