import { Fragment } from "react";
import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

/**
 * Breadcrumb matching the Figma pattern: brown (#4C300D)
 * links, #606060 slash separators, black active item,
 * Montserrat, capitalize.
 */
function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Fragment key={`${item.label}-${index}`}>
            <div className="px-1.5 py-1 lg:px-4">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="text-[13px] capitalize leading-[1.8] text-[#4C300D] hover:underline lg:text-[18px]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`text-[13px] capitalize leading-[1.8] lg:text-[18px] ${
                    isLast
                      ? "text-[#0C0C0C]"
                      : "text-[#4C300D]"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </div>

            {!isLast && (
              <span className="px-1 text-[13px] text-[#606060] lg:px-2 lg:text-[18px]">
                /
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
