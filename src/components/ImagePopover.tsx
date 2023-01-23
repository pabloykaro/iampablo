import * as Popover from "@radix-ui/react-popover";
import { ReactNode } from "react";

type ImagePopoverProps = {
  image: ReactNode;
  numberYear: number;
};

export function ImagePopOver({ image, numberYear }: ImagePopoverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger 
        className="cursor-pointer"
        asChild>
          {image}
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content className="absolute rotate-180  -translate-y-40  -left-28 top-12  bg-white/95 w-32 h-14 p-1 rounded-md">
          <ul className="text-black text-center rotate-180">
            <li>
            I have {numberYear} years of experience
            </li>
          </ul>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
