import { useEffect, useState } from "react";
import { getProducts } from "@/services/product.service";
import type { Product } from "@/types/product";
import ProductCard from "../../../components/product/ProductCard";
import Container from "@/components/layout/Container";

function BestSellers() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
        setProducts(response.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <Container>
    <div className="mb-10 flex items-center justify-between">
      <h2 className="text-[32px] font-semibold text-[#1E1E1E]">
        Best Sellers
      </h2>

      <button className="text-sm text-[#1E1E1E] hover:underline">
        View All
      </button>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {products.slice(0, 3).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
    </Container>
  </section>
  );
}

export default BestSellers;