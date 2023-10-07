import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const tabStyle = (activeTab: number, currentActiveTab: number) => ({
  color: activeTab === currentActiveTab ? "primary.main" : "#f00a60",
  fontWeight: "bold",
});

const userPageBoxStyle = { width: "100%", paddingTop: "100px" };

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

const bookContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "space-around",
  padding: "20px",
};

const bookCardStyle = {
  width: 280,
  height: 380,
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "#242424",
  boxShadow: "0px 0px 14px #29def0",
};

const cardButtonStyle = {
  color: "primary.main",
  "&:hover": {
    color: "#f00a60",
    filter: "drop-shadow(1px 1px 2px #29def0)",
  },
};

export {
  tabStyle,
  userPageBoxStyle,
  CustomTextField,
  bookContainerStyle,
  bookCardStyle,
  cardButtonStyle,
};
