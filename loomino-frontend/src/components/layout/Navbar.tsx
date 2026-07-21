import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Search, ShoppingBag } from "lucide-react";

import logo from "@/assets/images/logo.png";
import UserMenu from "./UserMenu";
import NavItem from "./megamenu/NavItem";
import SearchOverlay from "@/features/search/components/SearchOverlay";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { data: cart } = useCart();
  const { data: wishlist } = useWishlist();

  const cartCount = cart?.total_items ?? 0;
  const wishlistCount = wishlist?.length ?? 0;

  return (
    <nav className="font-loomino relative h-[110px] bg-[#A88548]">
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-[108px]">
        {/* Logo */}
        <Link to="/" aria-label="Loomino home">
          <img
            src={logo}
            alt="Loomino"
            className="h-[86px] w-[259px] object-contain"
          />
        </Link>

        {/* Navigation */}
        <ul
          className="flex items-center text-[18px] font-normal text-white"
          style={{ gap: "clamp(20px, calc(100vw * 32 / 1440), 42.67px)" }}
        >
          <NavItem label="Collection" to="/shop" />
          <NavItem label="New In" to="/shop" />
          <NavItem label="Modiweek" to="/modiweek" />
          <NavItem label="Plus Size" to="/plus-size" />
          <NavItem label="Sustainability" to="/sustainability" />
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-6 text-white">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search size={24} strokeWidth={1.8} />
          </button>

          <UserMenu />

          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <Heart size={24} strokeWidth={1.8} />
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#4C300D] px-1 text-[11px] font-semibold leading-none text-white">
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingBag size={24} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#4C300D] px-1 text-[11px] font-semibold leading-none text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
