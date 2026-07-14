import sustainabilityImage from "@/assets/images/sustainability/sustainability.png";
import Container from "@/components/layout/Container";
import SustainabilityCard from "./SustainabilityCard";

function SustainabilitySection() {
  return (
    <section className="mt-24">
  <Container className="px-0">
      <div
        className="flex h-[430px] items-center justify-end bg-cover bg-center pr-[120px]"
        style={{
          backgroundImage: `url(${sustainabilityImage})`,
        }}
      >
        <SustainabilityCard />
      </div>
      </Container>
    </section>
  );
}

export default SustainabilitySection;