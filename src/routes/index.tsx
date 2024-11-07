import { TextField, TextFieldRoot } from "~/components/ui/textfield";
import { Button } from "~/components/ui/button";
import { Search } from "lucide-solid";

export default function Home() {
  return (
    <main class="w-full flex flex-nowrap flex-col items-center p-4">
      <div class="p-8 max-w-[80%]">
        <h1 class="text-5xl font-bold">
          Get similar music based on one song or playlist
        </h1>
      </div>
      <div class="flex w-96 max-w-sm items-center space-x-2 pt-8">
        <TextFieldRoot class="w-full">
          <TextField
            class="text-lg h-12 px-4"
            type="text"
            placeholder="A Song, Spotify Playlist..."
          />
        </TextFieldRoot>
        <Button class="gap-2 flex h-12">
          <Search class="w-[1.2rem] aspect-square" />
        </Button>
      </div>
    </main>
  );
}
