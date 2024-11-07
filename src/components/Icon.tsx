import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

export default function Nav(props: {
  component: Component<any> | string | keyof JSX.IntrinsicElements;
  width?: string;
  class?: string;
}) {
  // let user = {name:"robert"};
  let component = () => props.component;
  let width = () => props.width || "1rem";
  let classList = () => props.class || "";

  return (
    <Dynamic
      component={component()}
      style={"width: " + width() + "; height: " + width() + ";"}
    />
  );
}
