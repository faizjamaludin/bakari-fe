import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

function DrawerMenu({ button, header }) {
    return (
        <Drawer direction="left">
            <DrawerTrigger>{<HiOutlineMenuAlt4 className="bg-background-primary rounded-full w-12 h-12 p-sm text-primary" />}</DrawerTrigger>
            <DrawerContent className="inset-y-0 w-[400px] mt-0 rounded-none p-md">
                <DrawerHeader>
                    <DrawerTitle><Header /></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <Menu />
                <DrawerFooter>
                    <Footer />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerMenu
