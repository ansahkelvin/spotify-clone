import { twMerge } from "tailwind-merge";
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join";

interface BoxProps {
  children: React.ReactNode;
  className?: ClassNameValue;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  );
};

export default Box;
