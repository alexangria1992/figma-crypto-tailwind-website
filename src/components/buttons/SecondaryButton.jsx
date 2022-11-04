import classNames from "classnames";
import React from "react";

export default function SecondaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames([
    "border-primary border hover:bg-primary hover:text-white transition-colors duration-300 px-10  rounded-full text-primary  py-4",
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
