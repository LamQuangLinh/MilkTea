import Banner from "../../components/ui/Banner/Banner";
import ComboSections from "../../components/ui/ComboSection/ComboSection";
import ProductSection from "../../components/ui/ProductSection/ProductSection";

function Home() {
  return (
    <div>
      <Banner />
      <ProductSection />
      <ComboSections />
    </div>
  );
}

export default Home;
