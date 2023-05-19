import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent min={0} max={100} default={50} step={10}
        onChange={(e)=>console.log(e.target.value)}
      />
    </div>
  );
};

export default SliderSelect;
