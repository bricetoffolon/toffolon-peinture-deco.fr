import React, {useState} from "react";
import {Button, Flex, Icon, Image, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import NextLink from "next/link";
import {FaHome} from "react-icons/fa";
import {ChevronDownIcon} from "@chakra-ui/icons";
import { hookAPICallToastResp } from "@/hook/hookAPICall";

export default function NavBarDashboard(): React.JSX.Element {
    const [isSubmit, setIsSubmit] = useState(false);

    hookAPICallToastResp("post", "/auth/logout", {}, isSubmit, setIsSubmit)

    return (
        <Flex
            shadow={"base"}
        >
            <Flex
                top={"1rem"}
                right={"1rem"}
                margin={"1%"}
                align={"center"}
                bg={"brand.200"}
            >
                <NextLink
                    href={"/"}
                    passHref
                >
                    <Button
                        w={{
                            base:"30%",
                            md:"20%"
                        }}
                        variant={""}
                        mt={"1%"}
                    >
                        <Flex>
                            <Image
                                align={"center"}
                                src={"https://toffolon-website.s3.eu-west-3.amazonaws.com/Toffolon-Icon.png"}
                            />
                        </Flex>
                    </Button>
                </NextLink>
                <Flex
                    margin={"1%"}
                    display={{
                        base: 'none',
                        xl: 'flex'
                    }}
                    right={"0"}
                    gap={"6"}
                >
                    <NextLink
                        href={"/redondo"}
                        passHref
                    >
                        <Button
                            variant={"ghost"}
                            _hover={{
                                bg: "brand.250",
                                shadow: "base"
                            }}
                            leftIcon={<Icon as={FaHome} color={"brand.500"}/>}
                        >
                            Home
                        </Button>
                    </NextLink>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                Settings
                            </MenuItem>
                            <MenuItem
                                _hover={{
                                    color:"red.500"
                                }}
                                onClick={() => {setIsSubmit(true)}}
                            >
                                Sign Out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    );
}