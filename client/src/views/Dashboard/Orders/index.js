// Chakra imports
// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { DocumentIcon } from "components/Icons/Icons";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { orderData } from "variables/general";

function Orders() {
  const textColor = useColorModeValue("gray.700", "white");
  const title = "Orders";
  const captions = ["Order #", "Price", "Status", "Qty", "", ""];
  const data = orderData;

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                {captions.map((caption, idx) => {
                  return (
                    <Th
                      color="gray.400"
                      key={idx}
                      ps={idx === 0 ? "0px" : null}
                    >
                      {caption}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => {
                return (
                  <TablesTableRow
                    key={row.id}
                    component={title}
                    colOneMain={row.name}
                    colOneSub={row.id}
                    colTwoMain={row.amount}
                    colThree={row.status}
                    colFour={row.quantity}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Orders;
