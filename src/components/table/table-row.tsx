import { ComponentProps } from "react";
interface TableRowProps extends ComponentProps<"tr"> {}
export function TableRow(props: TableRowProps) {
  return <tr className="hover:bg-white/5 border-b header-white/1" {...props} />;
}
