import kurtiImage from "@/assets/images/collection/kurti.png";
import sareeImage from "@/assets/images/collection/saree.png";
import shrugsImage from "@/assets/images/collection/shrugs.png";
import kameezImage from "@/assets/images/collection/kameez.png";

import Container from "@/components/layout/Container";
import CollectionTile from "./CollectionTile";

/**
 * Collection section, matching the Figma frame (node 1:2680):
 * two 600px columns (total 1224px, aligned with Best Sellers
 * and Modiweek), each with two stacked image tiles of differing
 * heights and a 64px gap. Category button placement alternates
 * per the design.
 */
function CollectionSection() {
  return (
    <section className="w-full bg-[#F7F0E5] py-20">
      <Container>
        <h2 className="mb-10 text-[32px] font-semibold text-[#0C0C0C]">
          Collection
        </h2>

        <div className="flex justify-center gap-6">
          {/* Left column — tall then short */}
          <div className="flex w-[600px] flex-col gap-16">
            <CollectionTile
              title="Kurti"
              image={kurtiImage}
              height={840}
              to="/shop?category=kurti"
              buttonAlign="left"
            />
            <CollectionTile
              title="Shrugs"
              image={shrugsImage}
              height={435}
              to="/shop?category=shrugs"
              buttonAlign="right"
              buttonBottom={13}
            />
          </div>

          {/* Right column — short then tall */}
          <div className="flex w-[600px] flex-col gap-16">
            <CollectionTile
              title="Saree"
              image={sareeImage}
              height={518}
              to="/shop?category=saree"
              buttonAlign="right"
            />
            <CollectionTile
              title="Kameez"
              image={kameezImage}
              height={837}
              to="/shop?category=kameez"
              buttonAlign="right"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CollectionSection;
