import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">🎉 Order Placed Successfully!</h1>
      <p className="mt-4">Thank you for your purchase. We will deliver it soon.</p>
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Go Home</button>
      </Link>
    </div>
  );
}
