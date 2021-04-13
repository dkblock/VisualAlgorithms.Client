import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MuiRadio from "@material-ui/core/Radio";
import colors from "../../../constants/colors";
import palette from "../../../utils/palette";

const theme = createMuiTheme({ palette });

const Radio = ({ className, value, onChange }) => {
  const [radioValue, setRadioValue] = useState(value);

  useEffect(() => {
    setRadioValue(value);
  }, [value]);

  const handleChange = () => {
    setRadioValue(true);
    onChange(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiRadio className={className} color={colors.primary} checked={radioValue} onChange={handleChange} />
    </ThemeProvider>
  );
};

export default Radio;
