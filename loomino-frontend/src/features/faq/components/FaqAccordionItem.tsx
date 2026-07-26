import { Minus, Plus } from "lucide-react";

import type { FaqItem } from "../faqData";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div className="w-full border-b border-[#CBCBCB]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2 p-6 text-left"
      >
        <span
          className={`flex-1 text-[20px] font-bold capitalize leading-[1.4] ${
            isOpen ? "text-[#4C300D]" : "text-[#0C0C0C]"
          }`}
        >
          {item.question}
        </span>

        {isOpen ? (
          <Minus
            size={24}
            className="shrink-0 text-[#4C300D]"
          />
        ) : (
          <Plus
            size={24}
            className="shrink-0 text-[#0C0C0C]"
          />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          {item.answer && (
            <p className="text-[16px] leading-[1.8] text-[#0C0C0C]">
              {item.answer}
            </p>
          )}

          {item.options && item.options.length > 0 && (
            <dl
              className={`space-y-4 ${item.answer ? "mt-4" : ""}`}
            >
              {item.options.map((option) => (
                <div key={option.label}>
                  <dt className="text-[15px] font-semibold text-[#4C300D]">
                    {option.label}
                  </dt>
                  <dd className="mt-1 text-[16px] leading-[1.8] text-[#0C0C0C]">
                    {option.detail}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}
    </div>
  );
}

export default FaqAccordionItem;
