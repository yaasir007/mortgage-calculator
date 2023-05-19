import { Typography, Stack } from "@mui/material";
import Slider from "@mui/material/Slider";

const SliderComponent = (props) => {
  return (
    <div>
      <Stack spacing={1}>
        <Typography variant="subtitle2">{props.title}</Typography>
        <Typography variant="h5">{props.unit}{props.amount}</Typography>
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
          {props.unit}{props.min}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {props.unit}{props.max}
        </Typography>
      </Stack>
    </div>
  );
};
export default SliderComponent;
