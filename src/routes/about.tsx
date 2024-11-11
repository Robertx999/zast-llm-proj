import { A } from "@solidjs/router";
import { buttonVariants } from "~/components/ui/button";
import Icon from "~/components/Icon";
import { Download, ExternalLink } from "lucide-solid";
import docsSvg from "~/assets/typst/documentation/main.svg";
import docsPdf from "~/assets/typst/documentation/main.pdf";
import { createSignal } from "solid-js";

export default function About() {
  const [isSrollZero, setIsSrollZero] = createSignal(true);
  return (
    <main
      style={
        isSrollZero() ? "border-top-width: 0px;" : "border-top-width: 1px;"
      }
      class="w-full h-full flex justify-center overflow-y-scroll border-border scroll-smooth"
      on:scroll={({ target: { scrollTop } }) => setIsSrollZero(scrollTop == 0)}
    >
      <div class="p-8 max-w-[80%] h-fit flex flex-col gap-6">
        <div class="flex flex-nowrap justify-between gap-12">
          <h1 class="font-semibold text-xl">Documentation</h1>
          <div class="flex gap-2">
            <A
              class={buttonVariants({ variant: "outline" })}
              href={docsPdf}
              target="_blank"
            >
              <Icon class="mr-2" component={ExternalLink} />
              Open
            </A>
            <A
              class={buttonVariants({ variant: "outline" })}
              href={docsPdf}
              download="documentation.pdf"
            >
              <Icon class="mr-2" component={Download} />
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
