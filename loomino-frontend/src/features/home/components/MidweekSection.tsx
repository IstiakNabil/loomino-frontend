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
    <section className="w-full bg-[#F7F0E5] py-20">
      <div className="mx-auto w-full max-w-[1920px] px-[108px]">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-[32px] font-semibold text-[#1E1E1E]">
          Modiweek
        </h2>
        <Link
          to="/modiweek"
          className="text-[15px] font-medium text-[#4C300D] transition hover:underline"
        >
          See All →
        </Link>
      </div>

      <div className="flex gap-6">
        {items.map((product) => (
          <MidweekCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default MidweekSection;
