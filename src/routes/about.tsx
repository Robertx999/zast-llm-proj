import { A } from "@solidjs/router";
import { buttonVariants } from "~/components/ui/button";
import Icon from "~/components/Icon";
import { Download, ExternalLink } from "lucide-solid";
import docsSvg from "~/assets/typst/documentation/main.svg";
import docsPdf from "~/assets/typst/documentation/main.pdf";

export default function About() {
  return (
    <main class="w-full flex justify-center">
      <div class="p-8 max-w-[80%] flex flex-col gap-6">
        <div class="flex flex-nowrap justify-between gap-12">
          <h1 class="font-semibold text-xl">Documentation</h1>
          <div class="flex gap-2">
            <A
              class={buttonVariants({ variant: "outline" }) + " flex gap-2"}
              href={docsPdf}
              target="_blank"
            >
              <Icon component={ExternalLink} />
              Open
            </A>
            <A
              class={buttonVariants({ variant: "outline" }) + " flex gap-2"}
              href={docsPdf}
              download="documentation.pdf"
            >
              <Icon component={Download} />
              Download
            </A>
          </div>
        </div>
        <img
          class="shadow-md shadow-[hsl(var(--muted-foreground)/15%)] rounded-md border border-input"
          src={docsSvg}
        />
      </div>
    </main>
  );
}
