import React, { useEffect, useState } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import palette from "../../../utils/palette";

const theme = createMuiTheme({ palette });

const TextField = ({
  className,
  label,
  type,
  value,
  error,
  helperText,
  multiline,
  rows,
  onChange,
  onFocus,
  onFocusOut,
}) => {
  const [fieldValue, setFieldValue] = useState(value);

  useEffect(() => {
    setFieldValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setFieldValue(newValue);
    onChange(newValue);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <MuiTextField
        className={className}
        color="primary"
        error={error}
        helperText={helperText}
        label={label}
        size="small"
        type={type}
        value={fieldValue}
        variant="outlined"
        multiline={multiline}
        rows={multiline ? rows : null}
        onChange={handleChange}
        onMouseDown={(e) => e.stopPropagation()}
        onFocus={onFocus}
        onBlur={onFocusOut}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </MuiThemeProvider>
  );
};

export default TextField;
