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
import {useSelector} from "react-redux"

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
let state = useSelector((store) => store.AuthReducer.data._id);
  useEffect(() => {
    console.log(data);
      axios
        .get(`https://gold-worried-walkingstick.cyclic.app/products/seller/product/${state}`)
        .then((res) => setData(res.data))
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const handleDelete = (id) => {
    
    axios
    .delete(`https://gold-worried-walkingstick.cyclic.app/products/delete/${id}`)
    .then((res) => setData(res.data))
    .catch((err) => {
      console.log(err);
    });
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
                          handleDelete(ele._id);
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
