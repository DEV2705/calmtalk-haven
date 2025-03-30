import { useRef } from "react";

const Table = ({ className, ...props }) => {
  const ref = useRef(null);
  return (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={`w-full caption-bottom text-sm ${className}`} {...props} />
    </div>
  );
};

const TableHeader = ({ className, ...props }) => {
  const ref = useRef(null);
  return <thead ref={ref} className={`[&_tr]:border-b ${className}`} {...props} />;
};

const TableBody = ({ className, ...props }) => {
  const ref = useRef(null);
  return <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />;
};

const TableFooter = ({ className, ...props }) => {
  const ref = useRef(null);
  return (
    <tfoot
      ref={ref}
      className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className}`}
      {...props}
    />
  );
};

const TableRow = ({ className, ...props }) => {
  const ref = useRef(null);
  return (
    <tr
      ref={ref}
      className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
      {...props}
    />
  );
};

const TableHead = ({ className, ...props }) => {
  const ref = useRef(null);
  return (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      {...props}
    />
  );
};

const TableCell = ({ className, ...props }) => {
  const ref = useRef(null);
  return <td ref={ref} className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />;
};

const TableCaption = ({ className, ...props }) => {
  const ref = useRef(null);
  return <caption ref={ref} className={`mt-4 text-sm text-muted-foreground ${className}`} {...props} />;
};

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
