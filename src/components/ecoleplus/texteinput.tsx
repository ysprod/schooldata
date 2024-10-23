import { Input, InputProps } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

export interface TexteinputProps extends InputProps {
  letype?: string;
  name: string;
  formData: { [key: string]: any };
  handleChange: ChangeEventHandler<HTMLInputElement>;
  titre: string;
  autocomplete?: string;
}

export default function Texteinput(props: TexteinputProps) {
  return (
    <Input
      className="block w-full col-span-full rounded-md border-1 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      type={props.letype ? props.letype : "text"}
      name={props.name}
      value={props.formData[props.name]}
      onChange={props.handleChange}
      id={props.name}
      label={props.titre}
      autoComplete={props.autocomplete ? props.autocomplete : "given-name"}
      {...props}
    />
  );
}
