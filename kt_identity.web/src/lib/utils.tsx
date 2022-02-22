import { FormElement } from "@nextui-org/react";
import { ChangeEvent } from "react";

const handleChange = (e: ChangeEvent<FormElement>, setState: Function) => {
  const input = e.target;
  setState((prev: any) => ({ ...prev, [input.name]: input.value }));
};

export { handleChange };
