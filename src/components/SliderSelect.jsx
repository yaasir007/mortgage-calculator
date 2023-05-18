import SliderComponent from "./common/SliderComponent"
import './css/sliderSelect.css'

const SliderSelect = () => {
  return (
    <div className="slider-container">
      <SliderComponent title="Home Value" amount="$5000" min="$1000" max="$10000" />
      <SliderComponent title="Down Payment" amount="$4100" min="$0" max="$5000" />
      <SliderComponent title="Loan Amount" amount="$900" min="$1000" max="$10000" />
      <SliderComponent title="Interest Rate" amount="%8" min="$1000" max="$10000" />
    </div>
  );
}

export default SliderSelect
