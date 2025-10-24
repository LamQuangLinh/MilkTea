import ComboCard from "../../common/ComboCard/ComboCard";
import "./ComboSection.css";
import { combos } from "../../../constants/combos";

function ComboSections() {
  return (
    <div className="combo-section">
      {combos.map((combo, index) => (
        <ComboCard
          key={index}
          name={combo.name}
          content={combo.content}
          image={combo.img}
          labelButton={combo.labelButton}
        />
      ))}
    </div>
  );
}
export default ComboSections;
