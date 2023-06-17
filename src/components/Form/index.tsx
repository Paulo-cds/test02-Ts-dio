import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { ButtonForm } from "../ButtonForm";
import { useState } from "react";

interface IButton {
  handleLogin: (user: string) => void;
}

export const Form = ({ handleLogin }: IButton) => {
  const [user, setUser] = useState("");
  return (
    <Box>
      <Center>
        <Heading as="h4" size="md">
          Faça seu login
        </Heading>
      </Center>
      <FormControl isRequired>
        <Box>
          <FormLabel>Email</FormLabel>
          <Input type="email" onChange={(e) => setUser(e.target.value)} />
        </Box>
        <Box mt={3}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </Box>
        <Center mt={5}>
          <ButtonForm handleLogin={handleLogin} user={user} />
        </Center>
      </FormControl>
    </Box>
  );
};
