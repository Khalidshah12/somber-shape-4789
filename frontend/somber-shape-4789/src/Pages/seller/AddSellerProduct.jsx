import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSellerProduct(props) {
  const { isOpen, setIsOpen ,Data,setData} = props;
  const [Product, setProduct] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Url, setUrl] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const onClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (Product, Price, confirmPrice) => {
    if (Price === confirmPrice) {
      axios
        .post("", {
          Product,
          Price,
          image: Url,
          category: Category,
          sellerId: "sellerID",
        })
        .then((res) => {
          setData([...Data,{
            Product,
            Price,
            image: Url,
            category: Category,
            sellerId: "sellerID",
          }])
          setIsOpen(false)

          toast({
            title: "Product created.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      toast({
        title: "Price not equal to confirm Price",
        status: "failed",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel> Product Name</FormLabel>
              <Input
                name="Product"
                type="text"
                placeholder="Product name"
                onChange={(e) => setProduct(e.target.value)}
              />
              <FormLabel>Product Price</FormLabel>
              <Input
                name="Price"
                type="number"
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <FormLabel>Image</FormLabel>
              <Input
                name="Url"
                type="URl"
                placeholder="Enter Image Url"
                onChange={(e) => setUrl(e.target.value)}
              />
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="bodyWash">Body Wash</option>
                <option value="handSoap">Hand Soap</option>
                <option value="ShowerGel">Shower Gel</option>
                <option value="Cologne">Cologne</option>
                <option value="Parfum">Parfum</option>
                <option value="Bodycream">Body Cream</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setIsOpen(false);
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSellerProduct;
