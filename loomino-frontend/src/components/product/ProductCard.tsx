import { Link } from "react-router-dom";

import type { Product } from "@/types/product";
import WishlistButton from "@/features/wishlist/components/WishlistButton";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.slug}`} className="block">
      <article className="group w-[392px] transition-opacity duration-200 hover:opacity-95">
        {/* Product Image */}
        <div className="relative h-[438px] w-full overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm">
            <WishlistButton
              variantId={product.default_variant_id}
              productName={product.name}
              size={24}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-3 flex items-start justify-between">
          <div>
            <h3 className="line-clamp-2 text-[14px] font-medium text-[#1E1E1E]">
              {product.name}
            </h3>
          </div>

          <p className="text-[14px] font-medium text-[#1E1E1E]">
            ৳{Number(product.price).toFixed(0)}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
