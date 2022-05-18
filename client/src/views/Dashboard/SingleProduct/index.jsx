import React, { useState } from "react";
// Chakra imports
// Chakra imports
import {
  Table,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Stack,
  StackDivider,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Switch,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { productData } from "variables/general";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const SingleProduct = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const data = productData;

  const [input, setInput] = useState("");
  const [custom, setCustom] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSwitch = () => {
    setCustom(!custom);
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            SKU: 60011682
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Container maxW={"5xl"} py={12}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  <Text
                    textTransform={"uppercase"}
                    color={"white"}
                    fontWeight={600}
                    fontSize={"sm"}
                    bg={useColorModeValue("teal.400", "teal.900")}
                    p={2}
                    alignSelf={"flex-start"}
                    rounded={"md"}
                  >
                    NEW
                  </Text>
                  <Heading> {input}</Heading>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Stack
                    spacing={4}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.100", "gray.700")}
                      />
                    }
                  >
                    <FormControl display="flex" alignItems="center">
                      <FormLabel htmlFor="ready-made" mb="0">
                        Product Custom Made?
                      </FormLabel>
                      <Switch
                        colorScheme="teal"
                        id="ready-made"
                        isChecked={custom}
                        onChange={handleSwitch}
                      />
                    </FormControl>
                    {custom ? (
                      <Stack spacing={4}>
                        <FormControl isRequired>
                          <Input id="sku" placeholder="SKU*" />
                        </FormControl>
                        <FormControl isRequired>
                          <Input
                            id="product-name"
                            placeholder="Product Name*"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <NumberInput defaultValue={0} precision={2} step={0.2}>
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <FormControl isRequired>
                          <FormLabel htmlFor="size">Size</FormLabel>
                          <Stack id="size" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">3</Checkbox>
                            <Checkbox colorScheme="teal">4</Checkbox>
                            <Checkbox colorScheme="teal">5</Checkbox>
                            <Checkbox colorScheme="teal">6</Checkbox>
                            <Checkbox colorScheme="teal">7</Checkbox>
                            <Checkbox colorScheme="teal">8</Checkbox>
                            <Checkbox colorScheme="teal">9</Checkbox>
                            <Checkbox colorScheme="teal">10</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="metalColor">
                            Metal Color
                          </FormLabel>
                          <Stack id="metalColor" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">White Gold</Checkbox>
                            <Checkbox colorScheme="teal">Yellow Gold</Checkbox>
                            <Checkbox colorScheme="teal">Rose Gold</Checkbox>
                            <Checkbox colorScheme="teal">Silver</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="purity">Purity</FormLabel>
                          <Stack id="purity" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">10K</Checkbox>
                            <Checkbox colorScheme="teal">14K</Checkbox>
                            <Checkbox colorScheme="teal">18K</Checkbox>
                            <Checkbox colorScheme="teal">24K</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="centerStone">
                            Center Stone
                          </FormLabel>
                          <Stack id="centerStone" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">Diamond</Checkbox>
                            <Checkbox colorScheme="teal">Signity</Checkbox>
                            <Checkbox colorScheme="teal">Mossainite</Checkbox>
                            <Checkbox colorScheme="teal">Lab Diamonds</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="clarity">Clarity</FormLabel>
                          <Stack id="clarity" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">SI</Checkbox>
                            <Checkbox colorScheme="teal">VS</Checkbox>
                            <Checkbox colorScheme="teal">VVS</Checkbox>
                            <Checkbox colorScheme="teal">SI-VS</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="stoneShape">
                            Stone Shape
                          </FormLabel>
                          <Stack id="stoneShape" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">
                              Round Brilliant Cut
                            </Checkbox>
                            <Checkbox colorScheme="teal">Emerald Cut</Checkbox>
                            <Checkbox colorScheme="teal">Princess Cut</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="carat">Carat</FormLabel>
                          <Stack id="carat" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">0.3</Checkbox>
                            <Checkbox colorScheme="teal">0.4</Checkbox>
                            <Checkbox colorScheme="teal">0.5</Checkbox>
                            <Checkbox colorScheme="teal">0.6</Checkbox>
                            <Checkbox colorScheme="teal">0.7</Checkbox>
                            <Checkbox colorScheme="teal">0.8</Checkbox>
                            <Checkbox colorScheme="teal">0.9</Checkbox>
                            <Checkbox colorScheme="teal">1</Checkbox>
                          </Stack>
                        </FormControl>
                      </Stack>
                    ) : (
                      <Stack spacing={4}>
                        <FormControl isRequired>
                          <Input id="sku" placeholder="SKU*" />
                        </FormControl>
                        <FormControl isRequired>
                          <Input
                            id="product-name"
                            placeholder="Product Name*"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <NumberInput defaultValue={0} precision={2} step={0.2}>
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <FormControl isRequired>
                          <FormLabel htmlFor="size">Size</FormLabel>
                          <Stack id="size" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">3</Checkbox>
                            <Checkbox colorScheme="teal">4</Checkbox>
                            <Checkbox colorScheme="teal">5</Checkbox>
                            <Checkbox colorScheme="teal">6</Checkbox>
                            <Checkbox colorScheme="teal">7</Checkbox>
                            <Checkbox colorScheme="teal">8</Checkbox>
                            <Checkbox colorScheme="teal">9</Checkbox>
                            <Checkbox colorScheme="teal">10</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="metalColor">
                            Metal Color
                          </FormLabel>
                          <Stack id="metalColor" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">White Gold</Checkbox>
                            <Checkbox colorScheme="teal">Yellow Gold</Checkbox>
                            <Checkbox colorScheme="teal">Rose Gold</Checkbox>
                            <Checkbox colorScheme="teal">Silver</Checkbox>
                          </Stack>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel htmlFor="purity">Purity</FormLabel>
                          <Stack id="purity" spacing={5} direction="row">
                            <Checkbox colorScheme="teal">10K</Checkbox>
                            <Checkbox colorScheme="teal">14K</Checkbox>
                            <Checkbox colorScheme="teal">18K</Checkbox>
                            <Checkbox colorScheme="teal">24K</Checkbox>
                          </Stack>
                        </FormControl>
                      </Stack>
                    )}
                    <FormControl isRequired>
                      <FormLabel htmlFor="category">Category</FormLabel>
                      <Stack id="category" spacing={5} direction="row">
                        <Checkbox colorScheme="teal">Ring</Checkbox>
                        <Checkbox colorScheme="teal">Diamond</Checkbox>
                        <Checkbox colorScheme="teal">Engagement</Checkbox>
                        <Checkbox colorScheme="teal">Jewelry</Checkbox>
                      </Stack>
                    </FormControl>
                    <Stack spacing={4} direction="row" align="center">
                      <Button colorScheme="teal" size="lg">
                        Save
                      </Button>
                      <Button colorScheme="red" size="lg">
                        Delete
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
                <Flex>
                  <Image
                    rounded={"md"}
                    alt={"feature image"}
                    src={
                      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-tiffany-true-diamond-in-platinum-63594873_996049_ED_M.jpg"
                    }
                    objectFit={"contain"}
                  />
                </Flex>
              </SimpleGrid>
            </Container>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default SingleProduct;
