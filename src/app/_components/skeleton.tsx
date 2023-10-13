import { cn } from "@/lib/utils"

export function Skeleton({
  className
}: {
  className?: string
}) {
  return <div className={cn(
    "animate-pulse rounded-lg bg-base-gray-500",
    className
  )} />
}
