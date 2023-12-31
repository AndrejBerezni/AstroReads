import { useContext, useRef, useState } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../AuthContext';
import { signUpWithEmail } from '../../firebase-config';
import {
  modalBox,
  modalHeader,
  modalBtn,
  modalAvatar,
} from '../../MUIstyles/forms';
import { CustomTextField } from '../../MUIstyles/userpage';
import formatFirebaseError from '../../utilities/formatFirebaseError';
import AuthAlert from '../AuthAlert/AuthAlert';

function SignUp() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const { show, hideForms, signIn } = useContext(AuthContext);

  const handleClose = () => hideForms();
  const closeAlert = () => setShowAlert(false);

  const handleSignUp = async () => {
    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      setAlertText('Passwords do not match');
      setShowAlert(true);
      return;
    }
    try {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      const user = await signUpWithEmail(email, password);
      if (user !== undefined && user !== '') {
        signIn(user);
        hideForms();
        navigate('/profile');
      }
    } catch (error: any) {
      const errorMessage = formatFirebaseError(error.message);
      setAlertText(errorMessage);
      setShowAlert(true);
    }
  };

  return (
    <Modal
      open={show.signUpForm}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalBox}>
        <Avatar sx={modalAvatar}>
          <RocketLaunchIcon />
        </Avatar>
        <h3 style={modalHeader}>Sign up</h3>
        <CustomTextField
          label="Email"
          required
          type="email"
          id="email"
          name="email"
          inputRef={emailRef}
        />
        <CustomTextField
          label="Password"
          required
          type="password"
          id="password"
          name="password"
          inputRef={passwordRef}
        />
        <CustomTextField
          label="Confirm Password"
          required
          id="confirm-password"
          name="confirm-password"
          type="password"
          inputRef={confirmPasswordRef}
        />
        <Button variant="outlined" sx={modalBtn} onClick={handleSignUp}>
          Sign Up
        </Button>
        {showAlert && (
          <AuthAlert alertText={alertText} handleClose={closeAlert} />
        )}
      </Box>
    </Modal>
  );
}

export default SignUp;
