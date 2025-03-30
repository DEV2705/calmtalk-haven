import * as React from "react";
import { Root as AspectRatioPrimitiveRoot } from "@radix-ui/react-aspect-ratio";

const AspectRatio = ({ children, ...props }) => (
  <AspectRatioPrimitiveRoot {...props}>{children}</AspectRatioPrimitiveRoot>
);

export { AspectRatio };
