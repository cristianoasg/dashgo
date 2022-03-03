import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cristiano augusto</Text>
          <Text color="gray.300" fontSize="small">
            meuemail@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Cristiano Augusto" src="https://github.com/cristianoasg.png" />
    </Flex>
  );
}