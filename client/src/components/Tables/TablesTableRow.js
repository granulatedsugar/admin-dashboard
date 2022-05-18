import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { DocumentIcon } from "components/Icons/Icons";
import React from "react";

function TablesTableRow(props) {
  const {
    key,
    img,
    component,
    colOneMain,
    colOneSub,
    colTwoMain,
    colTwoSub,
    colThree,
    colFour,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(component);
  console.log(img);
  console.log(key);

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {component === "Orders" ? (
            <DocumentIcon
              w="50px"
              borderRadius="12px"
              me="18px"
              fontSize="20px"
            />
          ) : (
            <Avatar src={img} w="50px" borderRadius="12px" me="18px" />
          )}
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {colOneMain}
            </Text>
            {component === "Products" ? (
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                SKU: {colOneSub}
              </Text>
            ) : (
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                {colOneSub}
              </Text>
            )}
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          {/* If value is a number then we are rendering product table */}
          {!isNaN(colTwoMain) ? (
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {formatter.format(colTwoMain)}
            </Text>
          ) : (
            <>
              <Text fontSize="md" color={textColor} fontWeight="bold">
                {colTwoMain}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                {colTwoSub}
              </Text>
            </>
          )}
        </Flex>
      </Td>
      <Td>
        {component === "Products" ? (
          <Badge
            bg={colThree === "NEW" ? "green.400" : bgStatus}
            color={colThree === "NEW" ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {colThree}
          </Badge>
        ) : component === "Orders" ? (
          <Badge
            bg={colThree === "Paid" ? "green.400" : bgStatus}
            color={colThree === "Paid" ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {colThree}
          </Badge>
        ) : (
          <Badge
            bg={colThree === "Active" ? "green.400" : bgStatus}
            color={colThree === "Active" ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {colThree}
          </Badge>
        )}
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {colFour}
        </Text>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Delete
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
