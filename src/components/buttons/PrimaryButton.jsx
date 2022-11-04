import classNames from "classnames";
import React from "react";

export default function PrimaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames([
    "bg-primary text-white rounded-full  py-4 px-6",
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
