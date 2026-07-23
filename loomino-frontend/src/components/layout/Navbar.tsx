import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";

import logo from "@/assets/images/logo.png";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import NavItem from "./megamenu/NavItem";
import SearchOverlay from "@/features/search/components/SearchOverlay";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";

/** Small count bubble shared by the wishlist and cart icons. */
function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <span className="absolute -right-4 -top-4 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#4C300D] px-2 text-[18px] font-semibold leading-none text-white lg:-right-2 lg:-top-2 lg:h-[18px] lg:min-w-[18px] lg:px-1 lg:text-[11px]">
      {count > 99 ? "99+" : count}
    </span>
  );
}

/**
 * Site header.
 *
 * Mobile is based on the Figma mobile HEADER (360x64) but
 * scaled up ~2.6x total (166px bar, 62px icons, 359x104
 * logo) — an initial 2x pass, then another +30% on top, per
 * request, for better visibility on phones. Desktop keeps
 * the original 110px bar with the hover mega-menus.
 *
 * The two layouts share one DOM tree — only the pieces that
 * genuinely differ are toggled — so the cart and wishlist
 * links are never duplicated.
 */
function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: cart } = useCart();
  const { data: wishlist } = useWishlist();

  const cartCount = cart?.total_items ?? 0;
  const wishlistCount = wishlist?.length ?? 0;

  return (
    <nav className="font-loomino relative h-[166px] bg-[#A88548] lg:h-[110px]">
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-5 md:px-10 lg:px-[108px]">
        {/* Left cluster — mobile only */}
        <div className="flex items-center gap-3 text-white lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-[62px] w-[62px]" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-[62px] w-[62px]" strokeWidth={1.8} />
          </button>
        </div>

        {/* Logo — 359x104 on mobile (~2.6x the Figma 138x40),
            259x86 on desktop */}
        <Link to="/" aria-label="Loomino home">
          <img
            src={logo}
            alt="Loomino"
            className="h-[104px] w-[359px] object-contain lg:h-[86px] lg:w-[259px]"
          />
        </Link>

        {/* Primary navigation — desktop only */}
        <ul
          className="hidden items-center text-[18px] font-normal text-white lg:flex"
          style={{ gap: "clamp(20px, calc(100vw * 32 / 1440), 42.67px)" }}
        >
          <NavItem label="Collection" to="/shop" />
          <NavItem label="New In" to="/shop" />
          <NavItem label="Modiweek" to="/modiweek" />
          <NavItem label="Plus Size" to="/plus-size" />
          <NavItem label="Sustainability" to="/sustainability" />
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-3 text-white lg:gap-6">
          {/* Search sits on the left on mobile, here on desktop */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="hidden lg:block"
          >
            <Search className="h-6 w-6" strokeWidth={1.8} />
          </button>

          <div className="hidden lg:block">
            <UserMenu />
          </div>

          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <Heart className="h-[62px] w-[62px] lg:h-6 lg:w-6" strokeWidth={1.8} />
            <CountBadge count={wishlistCount} />
          </Link>

          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingBag className="h-[62px] w-[62px] lg:h-6 lg:w-6" strokeWidth={1.8} />
            <CountBadge count={cartCount} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
