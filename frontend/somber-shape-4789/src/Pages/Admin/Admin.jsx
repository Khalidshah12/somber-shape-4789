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
import AddSeller from "./AddSeller";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([
    {
      first_name: "Seller",
      last_name:"Name",
      email:"seller@email.com"
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
      <AddSeller isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box pl={"10%"} pr={"10%"} isCentered={true}>
        <TableContainer>
          <Table variant="simple" justifyContent={"center"}>
            <TableCaption>All the sellers in the website</TableCaption>
            <Thead>
              <Tr>
                <Th isCentered>Name</Th>
                <Th isCentered>Email</Th>
                <Th isCentered>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((e) => {
               return ( 
               <Tr>
                  <Td isCentered>{`${e.first_name} ${e.last_name}`}</Td>
                  <Td isCentered>{`${e.email}`}</Td>
                  <Td isCentered>
                    <Button bgColor={"red"}
                     color="white"
                      onClick={() => {
                        handleDelete();
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
