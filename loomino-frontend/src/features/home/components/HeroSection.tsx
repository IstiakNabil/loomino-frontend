import { Link } from "react-router-dom";

import heroImage from "@/assets/images/hero/hero-banner.jpg";

function HeroSection() {
  return (
    <section className="font-loomino relative h-[660px] w-full">
      <img
        src={heroImage}
        alt="Hero-Banner"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-[1440px] flex-col justify-center px-[108px]">
          <h1 className="text-[56px] font-bold leading-tight text-white">
            Vibrant Heritage
            <br />
            Refined Minimalism
          </h1>

          <Link
            to="/shop?is_new_arrival=true"
            className="mt-[27px] w-fit bg-[#4C300D] px-8 py-3 text-lg font-medium text-white transition hover:opacity-90"
          >
            New In
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;