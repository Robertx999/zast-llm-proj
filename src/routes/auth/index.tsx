import { AudioWaveform, Moon, Sun } from "lucide-solid";
import Icon from "~/components/Icon";
import SpatialWave from "~/components/SpatialWave";
import Spotify from "~/components/Spotify";
import { Button, buttonVariants } from "~/components/ui/button";
import { TextFieldRoot, TextField } from "~/components/ui/textfield";
import { useColorMode } from "@kobalte/core";
import { A } from "@solidjs/router";

export default function Auth() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <main class="flex flex-row w-full h-full">
      <div
        style="background-color: linear-gradient(168deg, black 0%, hsl(240 5.9% 10%) 100%);"
        class="bg-[linear-gradient(168deg,hsl(240_5.9%_10%)_20%,black_100%)] w-full h-full border-r-border border-r-[1px] overflow-hidden"
      >
        <A
          href="/"
          class="font-semibold text-[hsl(0_0%_98%)] text-xl flex gap-2 items-center p-10 absolute"
        >
          <Icon width="1.75rem" component={AudioWaveform} />
          musica ai
        </A>
        <SpatialWave />
      </div>
      <div class="w-full h-full flex flex-col">
        <div class="w-full p-4 flex flex-rwo justify-end gap-2">
          <Button
            on:click={toggleColorMode}
            variant="ghost"
            class="px-2 aspect-square"
          >
            <Icon component={colorMode() == "light" ? Sun : Moon} />
          </Button>
        </div>

        <div class="flex flex-col items-center justify-center w-full h-full">
          <div class="flex flex-col flex-nowrap gap-4 w-full max-w-[350px]">
            <div class="flex flex-col items-center">
              <h1 class="font-semibold text-2xl">Login/Register</h1>
              <p class="text-sm text-muted-foreground">
                Create new or login to your account
              </p>
            </div>
            <form
              class="flex flex-col flex-nowrap gap-2"
              action="/"
              method="post"
            >
              <TextFieldRoot>
                <TextField type="text" name="username" placeholder="Username" />
              </TextFieldRoot>
              <TextFieldRoot>
                <TextField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </TextFieldRoot>
              <Button class="w-full" type="submit">
                Sign In/Up
              </Button>
            </form>
            <hr class="w-full h-[1px] bg-white"></hr>
            <Button class="w-full" variant="outline">
              <Icon
                width="1.2rem"
                component={Spotify}
                class="mr-2 fill-foreground"
              />
              Spotify
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
