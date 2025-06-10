import Link from "next/Link";
import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
  href?: string
}

export function IconButton({ transparent, href, children, ...props }: IconButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref
        className={`${props.disabled ? "opacity-50 cursor-not-allowed" : null}`}
        aria-disabled={props.disabled}
        tabIndex={props.disabled ? -1 : 0}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={`rounded-md p-1.5 ${props.disabled ? "opacity-50" : null}`}
    />
  )
}