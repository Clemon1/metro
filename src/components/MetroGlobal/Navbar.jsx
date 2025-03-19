import { Button, Flex, Image, List } from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
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
      paddingY={{ smDown: 10, smToMd: 10, mdTo2xl: 5 }}
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
        top={20}
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
        <Button
          bg={"#EF7826"}
          color={"#f4f4f4"}
          display={{ smDown: "flex", smToLg: "flex", lgTo2xl: "none" }}
          rounded={"3xl"}
          px={3}
          py={2}>
          Get in touch
        </Button>
      </List.Root>
      <Button
        bg={"#EF7826"}
        display={{ smDown: "none", smToLg: "none", lgTo2xl: "flex" }}
        color={"#f4f4f4"}
        rounded={"3xl"}
        px={3}
        py={2}>
        Get in touch
      </Button>
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
