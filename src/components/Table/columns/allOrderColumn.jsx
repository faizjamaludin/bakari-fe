export const allOrderColumn = [
  {
    accessorKey: "number",
    header: "#",
    cell: (row) => <span>{row.getValue()}</span>,
    size: 50,
  },
  {
    accessorKey: "date",
    header: "Date & Time",
    cell: (row) => <span>{row.getValue()}</span>,
  },
  {
    accessorKey: "cashierName",
    header: "Cashier Name",
    cell: (row) => <span>{row.getValue()}</span>,
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
    cell: (row) => <span>{row.getValue()}</span>,
  },
  {
    accessorKey: "totalPayment",
    header: "Total Payment",
    cell: (row) => <span>{row.getValue()}</span>,
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: (row) => <span>{row.getValue()}</span>,
  },
  {
    accessorKey: "orders",
    header: "Order Detail",
    cell: (row) => <span>{row.getValue()}</span>,
  },
];
