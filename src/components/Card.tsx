import { Box } from "@chakra-ui/react";
import { Form } from "./Form";
import { Header } from "./Header/Header";
import { useState } from "react";
import { login } from "../services/login";

interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Card = () => {
  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (user: string) => {
    setUser(user);
    setAlert(true);
  };

  return (
    <Box minHeight="100vh" backgroundColor="#9413dc">
      <Header />
      {alert && login(user, alert, setAlert)}
      <Box
        h="90%"
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={150}
      >
        <Box
          backgroundColor="#FFFFFF"
          borderRadius="25px"
          padding="15px"
          w="60%"
        >
          <Form handleLogin={handleLogin} />
        </Box>
      </Box>
    </Box>
  );
};
