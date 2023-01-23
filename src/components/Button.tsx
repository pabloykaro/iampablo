import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  content: string;
};
export function Button({ content, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-bgtemplate text-white rounded-lg md:px-6 px-2 font-medium md:py-1 hover:bg-white hover:text-black hover:border-[1px]
       hover:border-black"
      type="button"
    >
      {content}
    </button>
  );
}
