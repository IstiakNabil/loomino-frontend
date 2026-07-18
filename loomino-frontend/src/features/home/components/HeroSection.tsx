import { Link } from "react-router-dom";

import heroImage from "@/assets/images/hero/hero.png";

function HeroSection() {
  return (
    <section className="font-loomino relative h-[660px] w-full">
      <img
        src={heroImage}
        alt="Hero-Banner"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-[1920px] flex-col justify-center px-[108px]">
          <h1
            className="text-[48px] capitalize leading-[1.37] text-[#F0E6D8]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            Vibrant Heritage
            <br />
            Refined Minimalism
          </h1>

          <Link
            to="/shop?is_new_arrival=true"
            className="mt-[27px] flex h-[40px] w-[184px] items-center justify-center gap-1 bg-[#4C300D] p-4 text-[14px] capitalize text-[#F2F2F7] transition hover:opacity-90"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            New In
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;