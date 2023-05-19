import { Typography, Stack } from "@mui/material";
import Slider from "@mui/material/Slider";

const SliderComponent = (props) => {
  return (
    <div>
      <Stack spacing={1}>
        <Typography variant="subtitle2">Home Value</Typography>
        <Typography variant="h5">$3000</Typography>
      </Stack>
      <Slider
        defaultValue={props.default}
        min={props.min}
        max={props.max}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={props.step}
        marks
        onChange={props.onChange}
        // value={props.value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary" variant="caption">
          $100
        </Typography>
        <Typography color="text.secondary" variant="caption">
          $10000
        </Typography>
      </Stack>

      <Typography variant="subtitle2">Down Payment</Typography>
    </div>
  );
};
export default SliderComponent;
