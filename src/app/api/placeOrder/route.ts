import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Ensure this is correctly imported

export async function POST(req: Request) {
  try {
    const { user, orderDetails, totalAmount } = await req.json(); // ✅ Updated to use orderDetails

    if (!user || !orderDetails || orderDetails.length === 0) {
      console.error("Invalid request data:", { user, orderDetails, totalAmount });
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    // ✅ Store food name instead of food ID
    const orderData = {
      _type: "order",
      customerName: user.name,
      email: user.email,
      phone: user.phone, // ✅ Added phone number
      shippingAddress: user.address,
      totalAmount,
      items: orderDetails.map((item: any) => ({
        _type: "orderItem",
        productName: item.name, // ✅ Using name instead of _id
        quantity: item.quantity,
        price: item.price,
      })),
      status: "pending",
    };

    console.log("Attempting to store order in Sanity:", orderData);

    const response = await client.create(orderData);

    console.log("Sanity order response:", response);

    return NextResponse.json({ message: "Order placed successfully!", orderId: response._id }, { status: 201 });
  } catch (error) {
    console.error("Error placing order:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: "Failed to place order", details: errorMessage }, { status: 500 });
  }
}
