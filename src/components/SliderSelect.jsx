import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";


const SliderSelect = () => {
  return (
    <div>
      <Stack spacing={2}>
        <SliderComponent
          title="Home Value"
          min={1000}
          max={10000}
          default={50}
          step={10}
          onChange={(e) => console.log(e.target.value)}
          unit="$"
          amount="3000"
        />

        <SliderComponent
          title="Down Payment"
          min={0}
          max={100}
          default={50}
          step={10}
          onChange={(e) => console.log(e.target.value)}
          unit="$"
          amount="1000"
        />

        <SliderComponent
          title="Loan Amount"
          min={0}
          max={100}
          default={50}
          step={10}
          onChange={(e) => console.log(e.target.value)}
          unit="$"
          amount="5000"
        />
      </Stack>
    </div>
  );
};

export default SliderSelect
