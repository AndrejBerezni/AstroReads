import { createContext, useState, ReactNode } from 'react';

const AuthContext = createContext({
  auth: {
    isSignedIn: false,
    user: '',
  },
  show: {
    signInForm: false,
    signUpForm: false,
  },
  signIn: (user: string) => {
    console.log(user);
  },
  signOut: () => {},
  showSignIn: () => {},
  showSignUp: () => {},
  hideForms: () => {},
});

interface IAuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [auth, setAuth] = useState({
    isSignedIn: false,
    user: '',
  });

  const [show, setShow] = useState({
    signInForm: false,
    signUpForm: false,
  });

  const signIn = (user: string) => {
    setAuth({
      isSignedIn: true,
      user,
    });
  };

  const signOut = () => {
    setAuth({
      isSignedIn: false,
      user: '',
    });
  };

  const showSignIn = () => {
    setShow({
      signInForm: true,
      signUpForm: false,
    });
  };
  const showSignUp = () => {
    setShow({
      signInForm: false,
      signUpForm: true,
    });
  };
  const hideForms = () => {
    setShow({
      signInForm: false,
      signUpForm: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ auth, show, signIn, signOut, showSignIn, showSignUp, hideForms }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
