const formatFirebaseError = (error: string) => {
  switch (error) {
    case "Firebase: Error (auth/invalid-email).":
    case "Firebase: Error (auth/missing-email).":
      return "Please enter email";
    case "Firebase: Error (auth/invalid-login-credentials).":
      return "Please enter valid username / password";
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "Weak password - it should be at least 6 characters long";
    case "Firebase: Error (auth/missing-password).":
      return "Please enter password";
    default:
      return error;
  }
};

export default formatFirebaseError;
