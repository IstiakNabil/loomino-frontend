import Container from "../Container";

import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-[#0F141D] pb-10 pt-12">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div>
            <Newsletter />
            <SocialLinks />
          </div>

          <FooterLinks />
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}

export default Footer;