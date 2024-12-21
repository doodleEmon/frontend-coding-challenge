export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { Products } from "@/views/products";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}
