export const categoryColumn = [
  {
    accessorKey: "name",
    header: "Category Name",
    cell: (row) => <span>{row.getValue()}</span>,
  },
];
