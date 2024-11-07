// import { $typst } from "@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs";
import { createEffect, createResource, onMount } from "solid-js";
// import svg from "public/typst/documentation/main.svg";

export default function About() {
  let img;
  onMount(() => {
    console.log(img);
  });
  return (
    <img
      ref={img}
      class="shadow-md shadow-[hsl(var(--muted-foreground)/15%)] rounded-md border border-input"
      src="src/assets/typst/documentation/main.svg"
    />
  );
}
