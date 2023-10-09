import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface IAlertProps {
  alertText: string;
  handleClose: () => void;
}

function AuthAlert({ alertText, handleClose }: IAlertProps) {
  return (
    <Alert severity="error" onClose={handleClose}>
      <AlertTitle>Error</AlertTitle>
      {alertText}
    </Alert>
  );
}

export default AuthAlert;
