import { MailFilled } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";

export function Brand({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "flex gap-3 items-center text-3xl text-primary-normal cursor-pointer",
        className
      )}
      {...rest}
    >
      <MailFilled />
      <h1 className="text-lg text-heading m-0">Mail Master</h1>
    </div>
  );
}
