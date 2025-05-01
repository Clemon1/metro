import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  List,
  Portal,
} from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const clickActive = () => {
    setActive(!active);
  };
  const menu = [
    {
      name: "Home",
      hrefLink: "/",
    },

    {
      name: "About Us",
      hrefLink: "/about",
    },

    {
      name: "Our Services",
      hrefLink: "/services",
    },

    {
      name: "Recent Projects",
      hrefLink: "/projects",
    },
  ];
  return (
    <Flex
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingY={{ smDown: 7, smToMd: 7, mdTo2xl: 5 }}
      paddingX={10}
      bg={"#f4f4f4"}>
      <Link to={"/"}>
        <Image src={Logo} />
      </Link>

      <List.Root
        listStyle={"none"}
        display={{ smDown: "flex", smToLg: "flex", lgTo2xl: "flex" }}
        alignItems={"center"}
        pos={{ smDown: "fixed", smToLg: "fixed", xlTo2xl: "unset" }}
        gap={5}
        top={"4.2rem"}
        transition={"0.2s all ease-in"}
        transform={{
          smDown: active ? "translateX(0rem)" : "translateX(100rem)",

          smToLg: active ? "translateX(0rem)" : "translateX(100rem)",
        }}
        py={{ smDown: 4, smToLg: 4, lgTo2xl: 0 }}
        left={0}
        width={{ smDown: "100%", smToLg: "100%", lgTo2x: "fit-content" }}
        bg={"#f4f4f4"}
        zIndex={20}
        flexDirection={{ smDown: "column", smToLg: "column", lgTo2xl: "row" }}>
        {menu.map((menuItem) => (
          <List.Item
            color={"#717171"}
            key={menuItem.name}
            cursor={"pointer"}
            fontWeight={"normal"}
            _hover={{ color: "#ef7826" }}
            fontSize={14}>
            <NavLink
              to={menuItem.hrefLink}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#EF7826" : "#717171",
                fontWeight: isActive ? "bold" : "normal",
              })}>
              {menuItem.name}
            </NavLink>
          </List.Item>
        ))}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              bg={"#EF7826"}
              display={{ smDown: "none", smToLg: "none", lgTo2xl: "flex" }}
              color={"#f4f4f4"}
              rounded={"3xl"}
              px={3}
              py={2}>
              Get in touch
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content background={"#121212"}>
                <Dialog.Header
                  display={"flex"}
                  width={"full"}
                  gap={2}
                  p={4}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  position={"relative"}>
                  <Dialog.Title color={"#ffffff"}>Get in touch</Dialog.Title>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size='sm' />
                  </Dialog.CloseTrigger>
                </Dialog.Header>
                <Dialog.Body>
                  <Flex
                    w={"full"}
                    py={8}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={4}>
                    <a href='tel:2349120245727'>
                      <FaPhone size={40} color='#25d366 ' />
                    </a>
                    <Link to={"https:/wa.me/2349120245727"}>
                      <IoLogoWhatsapp size={40} color='#25d366 ' />
                    </Link>
                  </Flex>
                </Dialog.Body>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </List.Root>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button
            bg={"#EF7826"}
            display={{ smDown: "none", smToLg: "none", lgTo2xl: "flex" }}
            color={"#f4f4f4"}
            rounded={"3xl"}
            px={3}
            py={2}>
            Get in touch
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content background={"#121212"}>
              <Dialog.Header
                display={"flex"}
                width={"full"}
                gap={2}
                p={4}
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"relative"}>
                <Dialog.Title color={"#ffffff"}>Get in touch</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size='sm' />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                <Flex
                  w={"full"}
                  py={8}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={4}>
                  <a href='tel:2349120245727'>
                    <FaPhone size={40} color='#25d366 ' />
                  </a>
                  <Link to={"https:/wa.me/2349120245727"}>
                    <IoLogoWhatsapp size={40} color='#25d366 ' />
                  </Link>
                </Flex>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Button
        onClick={clickActive}
        bg={"transparent"}
        display={{ smDown: "flex", smToLg: "flex", lgTo2xl: "none" }}
        color={"#121212"}
        rounded={"3xl"}
        px={3}
        py={2}>
        <GiHamburgerMenu size={14} />
      </Button>
    </Flex>
  );
};

export default Navbar;
