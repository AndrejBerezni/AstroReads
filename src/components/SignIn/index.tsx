import { useContext, useRef, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router';

import { AuthContext } from '../../AuthContext';
import { signInWithGoogle, signInWithEmail } from '../../firebase-config';
import {
  modalBox,
  modalHeader,
  modalBtn,
  modalAvatar,
  modalP,
} from '../../MUIstyles/forms';
import formatFirebaseError from '../../utilities/formatFirebaseError';
import AuthAlert from '../AuthAlert/AuthAlert';
import { CustomTextField } from '../../MUIstyles/userpage';

function SignIn() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { show, hideForms, showSignUp, signIn } = useContext(AuthContext);

  const handleClose = () => hideForms();
  const handleSignUpClick = () => showSignUp();
  const closeAlert = () => setShowAlert(false);

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
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

  const handleEmailSignIn = async () => {
    try {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      const user = await signInWithEmail(email, password);
      if (user !== undefined && user !== '') {
        signIn(user);
        hideForms();
        navigate('/profile');
      }
    } catch (error: any) {
      const errorMessage = formatFirebaseError(error!.message);
      setAlertText(errorMessage);
      setShowAlert(true);
    }
  };

  return (
    <Modal
      open={show.signInForm}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalBox}>
        <Avatar sx={modalAvatar}>
          <RocketLaunchIcon />
        </Avatar>
        <h3 style={modalHeader}>Sign in</h3>
        <CustomTextField
          label="Email"
          required
          id="email"
          name="email"
          type="email"
          inputRef={emailRef}
        />
        <CustomTextField
          label="Password"
          required
          id="password"
          name="password"
          type="password"
          inputRef={passwordRef}
        />
        <Button
          variant="outlined"
          sx={{ ...modalBtn, marginBottom: '10px' }}
          onClick={handleEmailSignIn}
        >
          Sign In
        </Button>
        <p style={modalP}>Don't have an account?</p>
        <Link
          href="#"
          sx={{ fontFamily: 'var(--text-font)' }}
          onClick={handleSignUpClick}
        >
          {'Sign Up'}
        </Link>
        <p style={modalP}>Or</p>
        <Button sx={modalBtn} variant="outlined" onClick={handleGoogleSignIn}>
          <GoogleIcon sx={{ marginRight: '5px' }} />
          Continue with Google
        </Button>
        {showAlert && (
          <AuthAlert alertText={alertText} handleClose={closeAlert} />
        )}
      </Box>
    </Modal>
  );
}

export default SignIn;
