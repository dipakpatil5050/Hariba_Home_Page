import React from "react";
import {
  Card,
  Stack,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function ProductCard() {
  return (
    <>
      {/* <div className="w-32 Card h-52 ml-40 bg-gray-500 rounded-xl p-44 border flex flex-row item-center m-10"></div> */}
      <Card maxw="sm" className="w-72 rounded-md bg m-7">
        <CardBody>
          <img
            className="rounded-xl"
            src="https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317"
            alt="Green double couch with wooden legs"
            borderradius="lg"
          />
          <Stack mt={6} spacing={3}>
            <heading size="md">KAJU KATLI WITHOUT WARAKH & MAWA</heading>
            <text className="text-pink-400">
              This is Sample Product Description
            </text>
            <text color="blue.600" fontsize="2xl">
              ₹ 450
            </text>
          </Stack>
        </CardBody>
        <divider>
          <CardFooter className="flex">
            <buttongroup spacing={2}></buttongroup>
          </CardFooter>
        </divider>
      </Card>
    </>
  );
}

export default ProductCard;
