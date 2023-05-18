import Slider from "@mui/material/Slider"
import '../css/sliderComponent.css'

const SliderComponent = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.amount}</div>
      <div className="slider-con">
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        <div className="between">
          <div className="min">{props.min}</div>
          <div className="max">{props.max}</div>
        </div>
      </div>
    </div>
  )
}
export default SliderComponent;
