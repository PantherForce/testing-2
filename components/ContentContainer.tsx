import { twMerge } from "tailwind-merge";

type ContentContainerProps = {
  children: React.ReactNode;
  classNames?: string;
};

export default function ContentContainer({
  children,
  classNames,
}: ContentContainerProps) {
  return (
    <div
      className={twMerge(
        `container max-w-7xl p-4 py-8 
            md:p-16 lg:py-16 `,
        classNames
      )}
    >
      {children}
    </div>
  );
}
