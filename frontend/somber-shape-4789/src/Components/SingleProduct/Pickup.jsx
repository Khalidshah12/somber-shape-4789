import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

export default function Pickup({ isOpen, onOpen, onClose, setValue }) {
    
  const [isHelperText, setIsHelperText] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      <Text fontSize="sm" color="#005699 " fontWeight="500">
        Pick Up in Store
      </Text>
      <Text
        onClick={onOpen}
        cursor="pointer"
        fontSize="xs"
        pt="5px"
        textDecoration="underline"
        color="#333333"
      >
        Set Store
      </Text>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setValue("1");
          setIsHelperText(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center">
            <Image
              h="23px"
              w="32px"
              alt="delivery vehicle"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671101178428/images/svg-icons/bopis-icon-small.svg?yocs=o_s_"
            />
            <Text fontSize="16px" color="#005699" ml="10px">
              PICK UP IN STORE
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="14px" color="#666666">
              Set your location. Place your order. We'll have it waiting for
              you.
            </Text>
            <Text
              fontSize="14px"
              color="#666666"
              textAlign="center"
              textDecoration="underline"
            >
              Use my current location
            </Text>
          </ModalBody>

          <ModalFooter>
            <FormControl>
              <FormLabel fontSize="14px" color="#333333" fontWeight="normal">
                ZIP Code
              </FormLabel>
              <InputGroup>
                <Input
                  borderRadius=""
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setIsHelperText(false);
                  }}
                />
                <InputRightElement
                  onClick={() => setIsHelperText(true)}
                  children={
                    <SearchIcon
                      color="#333333"
                      fontSize="20px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                    />
                  }
                />
              </InputGroup>
              {isHelperText ? (
                input === "" ? (
                  <FormHelperText fontSize="12px" color="crimson">
                    Please enter a ZIP code
                  </FormHelperText>
                ) : (
                  <FormHelperText fontSize="12px" color="crimson">
                    Sorry! There are no participating stores near that
                    location.Please try another ZIP code.
                  </FormHelperText>
                )
              ) : (
                ""
              )}
            </FormControl>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
