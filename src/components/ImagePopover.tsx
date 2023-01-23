import * as Popover from "@radix-ui/react-popover";
import { ReactNode } from "react";

type ImagePopoverProps = {
  image: ReactNode;
};

export function ImagePopOver({ image }: ImagePopoverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger 
        className="cursor-pointer"
        asChild>
          {image}
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content className="absolute  translate-x-[-6rem] md:translate-x-0    md:right-[-80%]  top-4 bg-black/50 w-32  p-1 rounded-md">
          <ul className="text-white">
            <li>Power: </li>
            <li>Abilities: </li>
            <li>Age: </li>
          </ul>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
