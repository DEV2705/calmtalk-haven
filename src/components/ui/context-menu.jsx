import React from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "./ContextMenu"; // Adjust the import path as needed

export default function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="p-4 border border-gray-300 rounded-md">
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={() => alert("Option 1 selected")}>
          Option 1
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => alert("Option 2 selected")}>
          Option 2
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onSelect={() => alert("Option 3 selected")}>
          Option 3
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
