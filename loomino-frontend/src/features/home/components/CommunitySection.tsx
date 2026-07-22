import community1 from "@/assets/images/community/community-1.jpg";
import community2 from "@/assets/images/community/community-2.png";
import community3 from "@/assets/images/community/community-3.png";
import community4 from "@/assets/images/community/community-4.jpg";
import community5 from "@/assets/images/community/community-5.jpg";

import Container from "@/components/layout/Container";
import CommunityImage from "./CommunityImage";

const communityPosts = [
  {
    id: 1,
    image: community1,
    alt: "Community Post 1",
  },
  {
    id: 2,
    image: community2,
    alt: "Community Post 2",
  },
  {
    id: 3,
    image: community3,
    alt: "Community Post 3",
  },
  {
    id: 4,
    image: community4,
    alt: "Community Post 4",
  },
  {
    id: 5,
    image: community5,
    alt: "Community Post 5",
  },
];

function CommunitySection() {
  return (
    <section className="bg-[#F0E6D8] py-20">
      <Container>
        <h2 className="mb-10 text-[32px] font-semibold text-[#1E1E1E]">
          Loomino Community
        </h2>

        {/* Figma "Follow Us" frame (1:2660): flush collage,
            no gaps — big image 603 : right grid 621, tiles
            310.5x375.5. Fluid so it fills the container at
            any width while keeping those exact ratios. */}
        <div className="flex items-stretch">
          {/* Large Image */}
          <CommunityImage
            image={communityPosts[0].image}
            alt={communityPosts[0].alt}
            className="aspect-[603/751] min-w-0 flex-[603]"
          />

          {/* Right Grid — 2x2, edge to edge */}
          <div className="grid min-w-0 flex-[621] grid-cols-2">
            <CommunityImage
              image={communityPosts[1].image}
              alt={communityPosts[1].alt}
              className="aspect-[621/751] w-full"
            />

            <CommunityImage
              image={communityPosts[2].image}
              alt={communityPosts[2].alt}
              className="aspect-[621/751] w-full"
            />

            <CommunityImage
              image={communityPosts[3].image}
              alt={communityPosts[3].alt}
              className="aspect-[621/751] w-full"
            />

            <CommunityImage
              image={communityPosts[4].image}
              alt={communityPosts[4].alt}
              className="aspect-[621/751] w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CommunitySection;