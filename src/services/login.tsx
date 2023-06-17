import { Alert, AlertDescription, AlertTitle } from "@chakra-ui/react";

export const login = (user: string, alert: any, setAlert: any) => {
  setTimeout(() => {
    setAlert(false);
  }, 3000);

  if (alert) {
    return (
      <Alert
        status="success"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <AlertTitle>Olá {user}</AlertTitle>
        <AlertDescription>Seja Bem Vindo!</AlertDescription>
      </Alert>
    );
  }
};
