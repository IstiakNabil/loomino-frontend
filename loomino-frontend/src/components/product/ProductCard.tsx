import { Link } from "react-router-dom";

import { CURRENCY_SYMBOL } from "@/lib/constants";
import type { Product } from "@/types/product";
import WishlistButton from "@/features/wishlist/components/WishlistButton";
import AddToCartButton from "@/features/cart/components/AddToCartButton";

interface ProductCardProps {
  product: Product;
  /**
   * Shows a quick "add to cart" button alongside the wishlist
   * heart, adding the product's default variant directly (no
   * size/color picker). Off by default — only Best Sellers asks
   * for this; Shop/Related Products/Plus Size keep the existing
   * card-only-links-to-detail-page behavior.
   */
  showQuickAdd?: boolean;
}

function ProductCard({ product, showQuickAdd = false }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="block w-full min-w-0"
    >
      <article className="group w-full transition-opacity duration-200 hover:opacity-95">
        {/* Product Image — same 392:438 proportions as the Figma card, scaled fluidly */}
        <div className="relative aspect-[392/438] w-full overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute right-3 top-3 flex flex-col gap-2">
            <div className="rounded-full bg-white/80 p-2 backdrop-blur-sm">
              <WishlistButton
                variantId={product.default_variant_id}
                productName={product.name}
                size={24}
              />
            </div>

            {showQuickAdd && (
              <div className="rounded-full bg-white/80 p-2 backdrop-blur-sm">
                <AddToCartButton
                  variantId={product.default_variant_id}
                  productName={product.name}
                  size={24}
                />
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-3 flex items-center justify-between gap-3 px-2">
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            {product.brand && (
              <p className="truncate text-[16px] font-bold capitalize leading-[1.4] text-[#0C0C0C]">
                {product.brand}
              </p>
            )}
            <p className="truncate text-[16px] font-normal capitalize leading-[1.8] text-[#0C0C0C]">
              {product.name}
            </p>
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-end gap-2">
                {product.colors.slice(0, 3).map((color) => (
                  <span
                    key={color.id}
                    className="h-6 w-6 shrink-0 rounded-full border border-black/10"
                    style={{ backgroundColor: color.hex_code }}
                    title={color.name}
                  />
                ))}
              </div>
            )}
          </div>

          <p className="shrink-0 whitespace-nowrap text-[16px] font-bold text-[#0C0C0C]">
            {CURRENCY_SYMBOL}
            {Number(product.price).toFixed(0)}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
