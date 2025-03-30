import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = ({ children, ...props }) => (
  <CollapsiblePrimitive.Root {...props}>{children}</CollapsiblePrimitive.Root>
);

const CollapsibleTrigger = ({ children, ...props }) => (
  <CollapsiblePrimitive.Trigger {...props}>
    {children}
  </CollapsiblePrimitive.Trigger>
);

const CollapsibleContent = ({ children, ...props }) => (
  <CollapsiblePrimitive.Content {...props}>
    {children}
  </CollapsiblePrimitive.Content>
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
