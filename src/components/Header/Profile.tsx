import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jaelson Santos</Text>
        <Text color="gray.300" fontSize="small">
          jaelson.jua@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Jaelson Santos"
        src="https://github.com/jaelsondev.png"
      />
    </Flex>
  );
}
