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
    <section className="bg-[#F0E6D8] py-12 lg:py-20">
      <Container>
        <h2 className="mb-6 text-[22px] font-semibold text-[#1E1E1E] lg:mb-10 lg:text-[32px]">
          Loomino Community
        </h2>

        {/* Mobile — Figma frame 1:3643 (320x388): two flush
            rows of 194, split 152/168 then 160/160. */}
        <div className="flex flex-col lg:hidden">
          <div className="flex aspect-[320/194] w-full">
            <CommunityImage
              image={communityPosts[1].image}
              alt={communityPosts[1].alt}
              className="min-w-0 flex-[152]"
            />
            <CommunityImage
              image={communityPosts[2].image}
              alt={communityPosts[2].alt}
              className="min-w-0 flex-[168]"
            />
          </div>

          <div className="flex aspect-[320/194] w-full">
            <CommunityImage
              image={communityPosts[3].image}
              alt={communityPosts[3].alt}
              className="min-w-0 flex-[160]"
            />
            <CommunityImage
              image={communityPosts[4].image}
              alt={communityPosts[4].alt}
              className="min-w-0 flex-[160]"
            />
          </div>
        </div>

        {/* Desktop — Figma "Follow Us" frame (1:2660): flush
            collage, big image 603 : right grid 621. */}
        <div className="hidden items-stretch lg:flex">
          <CommunityImage
            image={communityPosts[0].image}
            alt={communityPosts[0].alt}
            className="aspect-[603/751] min-w-0 flex-[603]"
          />

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
