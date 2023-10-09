import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { alertTitleStyle, alertStyle } from "../../MUIstyles/forms";

interface IAlertProps {
  alertText: string;
  handleClose: () => void;
}

function AuthAlert({ alertText, handleClose }: IAlertProps) {
  return (
    <Alert severity="error" onClose={handleClose} sx={alertStyle}>
      <AlertTitle sx={alertTitleStyle}>Error</AlertTitle>
      {alertText}
    </Alert>
  );
}

export default AuthAlert;
