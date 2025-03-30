import * as React from "react";
import { cn } from "@/lib/utils";

const Alert = ({ className, variant = "default", children, ...props }) => {
  const alertClasses = cn(
    "relative w-full rounded-lg border p-4",
    "[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    variant === "destructive"
      ? "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      : "bg-background text-foreground",
    className
  );

  return (
    <div role="alert" className={alertClasses} {...props}>
      {children}
    </div>
  );
};

const AlertTitle = ({ className, children, ...props }) => (
  <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props}>
    {children}
  </h5>
);

const AlertDescription = ({ className, children, ...props }) => (
  <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props}>
    {children}
  </div>
);

export { Alert, AlertTitle, AlertDescription };
