import { useLocation } from "@solidjs/router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import Login from "~/components/Login";
import Icon from "~/components/Icon";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-solid";
import { useColorMode } from "@kobalte/core";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div class="flex flex-nowrap flex-row justify-between items-center p-4 w-full">
      <NavigationMenu>
        <NavigationMenuTrigger as="a" href="/">
          Home
        </NavigationMenuTrigger>
        <NavigationMenuTrigger as="a" href="/about">
          About
        </NavigationMenuTrigger>
        <NavigationMenuTrigger as="a" href="/app">
          Application
        </NavigationMenuTrigger>
      </NavigationMenu>
      <div class="flex flex-nowrap flex-row items-center gap-2">
        <Login />
        <div class="w-[1px] h-full bg-border overflow-hidden">&nbsp</div>
        <Button
          on:click={toggleColorMode}
          variant="ghost"
          class="px-2 aspect-square"
        >
          <Icon component={colorMode() == "light" ? Sun : Moon} />
        </Button>
      </div>
    </div>
    // <nav class="bg-sky-800">
    //   <ul class="container flex items-center p-3 text-gray-200">
    //     <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
    //       <a href="/">Home</a>
    //     </li>
    //     <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
    //       <a href="/about">About</a>
    //     </li>
    //   </ul>
    // </nav>
  );
}
