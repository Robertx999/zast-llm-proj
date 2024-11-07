import { House } from "lucide-solid";
import Icon from "~/components/Icon";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main class="flex flex-nowrap flex-col items-center p-4">
      <h1 class="max-6-xs text-6xl font-medium mt-16">Not Found</h1>
      <p class="mt-8">The page you are trying to reach is non exitent.</p>
      <div class="my-8">
        <Button as="a" href="/" class="flex gap-2">
          <Icon component={House} />
          Go back to Home
        </Button>
      </div>
    </main>
  );
}
