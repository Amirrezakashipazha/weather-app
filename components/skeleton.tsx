import React from "react";

interface SkeletonSimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SkeletonSimpleCard: React.FC<SkeletonSimpleCardProps> = ({
  className = "",
  ...restProps
}) => {
  return (
    <div
      className={`grid h-full max-h-[300px] min-h-[160px] w-full max-w-xs animate-pulse place-items-center rounded-lg bg-gray-700 ${className}`}
      {...restProps}
    ></div>
  );
};

import { Typography } from "@material-tailwind/react";

export function SkeletonContent({
  lines,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`w-full animate-pulse ${className}`}>
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-8/12 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      {Array.from({ length: lines || 1 }).map((_, index) => (
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      ))}
    </div>
  );
}

export { SkeletonSimpleCard };
