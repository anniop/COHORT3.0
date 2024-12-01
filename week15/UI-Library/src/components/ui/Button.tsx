import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  "primary": "bg-purple-600 text-white rounded",
  "secondary": "bg-purple-300 text-purple-600 rounded "
}

const sizeStyles = {
  "sm": "py-1 px-2",
  "md": "py-2 px-4",
  "lg": "py-3 px-6"
}


export const Button = (props: ButtonProps) => {


  return <button className={sizeStyles[props.size] + " " + variantStyles[props.variant]}>
    <div className="flex">
      {props.startIcon}
      <div className="pl-2 pr-2">
        {props.text}
      </div>
      {props.endIcon}
    </div>
  </button>

}


