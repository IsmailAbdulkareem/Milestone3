export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Item Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    },
  ],
};
