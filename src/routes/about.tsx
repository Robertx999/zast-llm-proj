import { A } from "@solidjs/router";
import { Button, buttonVariants } from "~/components/ui/button";
import Typst from "~/components/Typst";
import Icon from "~/components/Icon";
import { Download, ExternalLink } from "lucide-solid";
// import svg from "src/assets/typst/documentation/main.svg";

export default function About() {
  return (
    <main class="w-full flex justify-center">
      <div class="p-8 max-w-[80%] flex flex-col gap-6">
        <div class="flex flex-nowrap justify-between gap-12">
          <h1 class="font-semibold text-xl">Documentation</h1>
          <div class="flex gap-2">
            <A
              class={buttonVariants({ variant: "outline" }) + " flex gap-2"}
              href="/src/assets/typst/documentation/main.pdf"
              target="_blank"
            >
              <Icon component={ExternalLink} />
              Open
            </A>
            <A
              class={buttonVariants({ variant: "outline" }) + " flex gap-2"}
              href="/src/assets/typst/documentation/main.pdf"
              download="documentation.pdf"
            >
              <Icon component={Download} />
              Download
            </A>
          </div>
        </div>
        <Typst />
      </div>
    </main>
  );
}
