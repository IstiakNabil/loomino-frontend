import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  to?: string;
}

const footerLinks: { title: string; links: FooterLink[] }[] =
  [
    {
      title: "About Loomino",
      links: [
        { label: "Collection", to: "/shop" },
        { label: "Sustainability", to: "/sustainability" },
        { label: "Privacy Policy" },
        { label: "Support System" },
        { label: "Terms & Condition" },
        { label: "Copyright Notice" },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { label: "Orders & Shipping" },
        { label: "Returns & Refunds" },
        { label: "FAQs", to: "/faqs" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Join Up",
      links: [
        { label: "Loomino Club" },
        { label: "Careers" },
        { label: "Visit Us" },
      ],
    },
  ];

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-20">
      {footerLinks.map((column) => (
        <div key={column.title}>
          <h4 className="mb-4 text-[18px] font-medium text-white lg:mb-6 lg:text-[22px]">
            {column.title}
          </h4>

          <ul className="space-y-3 lg:space-y-4">
            {column.links.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link
                    to={link.to}
                    className="cursor-pointer text-sm text-white transition hover:text-[#D4B483] lg:text-base"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="cursor-pointer text-sm text-white transition hover:text-[#D4B483] lg:text-base">
                    {link.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
