import { Link } from "react-router-dom";

import { useModiweek } from "@/features/product-details/hooks/useModiweek";
import MidweekCard from "./MidweekCard";

const MAX_CARDS = 5;

function MidweekSection() {
  const { data: products } = useModiweek();
  const items = (products ?? []).slice(0, MAX_CARDS);

  // Nothing marked as Modiweek yet — skip the section rather
  // than show an empty heading with no cards under it.
  if (products && items.length === 0) return null;

  return (
    <section className="w-full bg-[#F0E6D8] py-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1920px] px-5 md:px-10 lg:px-[108px]">
      <div className="mb-6 flex items-center justify-between lg:mb-10">
        <h2 className="text-[22px] font-semibold text-[#1E1E1E] lg:text-[32px]">
          Modiweek
        </h2>
        <Link
          to="/modiweek"
          className="text-[15px] font-medium text-[#4C300D] transition hover:underline"
        >
          See All →
        </Link>
      </div>

      <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10 lg:mx-0 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
        {items.map((product) => (
          <MidweekCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default MidweekSection;
