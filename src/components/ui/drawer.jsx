import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "./DrawerComponent"; // Ensure correct import path

const ExampleDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Open Drawer
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is an example of a drawer component.
          </DrawerDescription>
        </DrawerHeader>
        <p className="p-4">You can add content here...</p>
        <DrawerFooter>
          <DrawerClose className="px-4 py-2 bg-gray-500 text-white rounded-md">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ExampleDrawer;
