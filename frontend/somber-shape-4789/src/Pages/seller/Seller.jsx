import {
  Box,
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddSellerProduct from "./AddSellerProduct";

export default function Seller() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([
    {
      _id:1,
      name: "Product Name",
      Price: 200,
      seller_email: "seller@email.com",
    },
  ]);

  useEffect(() => {
    console.log(data);
    //   axios
    //     .get("")
    //     .then((res) => setData(res.data))
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }, []);

  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <Box align={"center"}>
      <Button onClick={() => setIsOpen(!isOpen)}>Create Seller</Button>
      <AddSellerProduct isOpen={isOpen} setIsOpen={setIsOpen}  Data={data} setData={setData} />
      <Box pl={"10%"} pr={"10%"} isCentered={true}>
        <TableContainer>
          <Table variant="simple" justifyContent={"center"}>
            <TableCaption>All the sellers in the website</TableCaption>
            <Thead>
              <Tr>
                <Th isCentered>Product Name</Th>
                <Th isCentered>Product_Price</Th>
                <Th isCentered>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((e) => {
                return (
                  <Tr>
                    <Td>{e._id}</Td>
                    <Td isCentered>{`${e.name}`}</Td>
                    <Td isCentered>{`${e.price}`}</Td>
                    <Td isCentered>
                      <Button
                        bgColor={"red"}
                        color="white"
                        onClick={() => {
                          handleDelete();
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
