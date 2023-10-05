import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#29def0",
    },
    "& label": {
      color: "#f00a60",
      fontFamily: '"Orbitron", sans-serif',
    },
    "&:hover label": {
      color: "#29def0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#29def0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f00a60",
      },
      "&:hover fieldset": {
        borderColor: "#29def0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#29def0",
      },
      "& .MuiOutlinedInput-input": {
        color: "#29def0",
        fontFamily: '"Orbitron", sans-serif',
      },
    },
  });

  export default CustomTextField;