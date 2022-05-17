// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import { tablesTableData } from "variables/general";
import Users from "./components/Users";

function Tables() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Users
        title={"Users"}
        captions={["User", "Role", "Status", "Registered Date", "", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default Tables;
