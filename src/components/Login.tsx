import { LogIn } from "lucide-solid";
import Icon from "~/components/Icon";
import { Button } from "~/components/ui/button";

export default function Nav() {
  // let user = {name:"robert"};
  let user = undefined;
  return user != undefined ? (
    <div></div>
  ) : (
    <div>
      <Button
        class="flex gap-2"
        variant="ghost"
        on:click={() => console.log("test")}
      >
        <Icon component={LogIn} />
        Log in
      </Button>
    </div>
  );
}
