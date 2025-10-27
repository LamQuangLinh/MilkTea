import Banner from "../../components/ui/Banner/Banner";
import ComboSections from "../../components/ui/ComboSection/ComboSection";
import ProductSection from "../../components/ui/ProductSection/ProductSection";
import SelectSection from "../../components/ui/SelectSection/SelectSection";

function Home() {
  return (
    <div>
      <Banner />
      <ProductSection />
      <ComboSections />
      <SelectSection />
    </div>
  );
}

export default Home;
