import { Center, Image, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center w="100%" h="80px" bg="orange" gap="30px">
      <Image
        boxSize="150px"
        src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg"
      />
      <Text fontSize="4xl">Dio Bank</Text>
    </Center>
  );
};
