import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const Breadcrumb = ({ children, ...props }) => (
  <nav aria-label="breadcrumb" {...props}>{children}</nav>
);

const BreadcrumbList = ({ className, children, ...props }) => (
  <ol
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  >
    {children}
  </ol>
);

const BreadcrumbItem = ({ className, children, ...props }) => (
  <li className={cn("inline-flex items-center gap-1.5", className)} {...props}>
    {children}
  </li>
);

const BreadcrumbLink = ({ className, children, ...props }) => (
  <a className={cn("transition-colors hover:text-foreground", className)} {...props}>
    {children}
  </a>
);

const BreadcrumbPage = ({ className, children, ...props }) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  >
    {children}
  </span>
);

const BreadcrumbSeparator = ({ children, className, ...props }) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);

const BreadcrumbEllipsis = ({ className, ...props }) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
