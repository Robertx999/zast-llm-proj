import { A } from "@solidjs/router";
import { LogIn } from "lucide-solid";
import Icon from "~/components/Icon";
import { Button, buttonVariants } from "~/components/ui/button";

export default function Nav() {
  // let user = {name:"robert"};
  let user = undefined;
  return user != undefined ? (
    <div></div>
  ) : (
    <div>
      <A href="/auth" class={buttonVariants({ variant: "ghost" })}>
        <Icon class="mr-2" component={LogIn} />
        Login
      </A>
    </div>
  );
}
