import { Button } from "@chakra-ui/react";

interface IButton {
  user: string;
  handleLogin: (user: string) => void;
}

export const ButtonForm = ({ user, handleLogin }: IButton) => {
  return (
    <Button onClick={() => handleLogin(user)} colorScheme="teal" size="md">
      Login
    </Button>
  );
};
