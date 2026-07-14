import shopHero from "@/assets/images/shop/shop-hero.png";

function ShopHero() {
  return (
    <section className="mx-auto max-w-[1440px]">
      <img
        src={shopHero}
        alt="Shop Hero"
        className="h-[665px] w-full object-cover"
      />
    </section>
  );
}

export default ShopHero;