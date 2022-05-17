// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Products from "../Products/components/Products";
import { productData } from "variables/general";

function Tables() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Products
        title={"Products"}
        captions={["Product Name", "Price", "Status", "Stock", "", ""]}
        data={productData}
      />
    </Flex>
  );
}

export default Tables;
