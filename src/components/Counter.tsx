import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <Button variant="outline" on:click={() => setCount(count() + 1)}>
      Clicks: {count()}
    </Button>
  );
}
