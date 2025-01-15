import { PiCashRegister } from "react-icons/pi";
import { BsActivity } from "react-icons/bs";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";





export const menuList = [
    {
        name: "Point of Sale",
        icon: (className) => <PiCashRegister className={className} />,
        link: "/"
    },
    {
        name: "Activity",
        icon: (className) => <BsActivity className={className} />,
        link: "/activity/billing-que"
    },
    {
        name: "Report",
        icon: (className) => <AiOutlinePieChart className={className} />,
        link: "/report"
    },
    {
        name: "Inventory",
        icon: (className) => <MdOutlineInventory2 className={className} />,
        link: "/inventory"
    },
    {
        name: "Teams",
        icon: (className) => <RiGroupLine className={className} />,
        link: "/teams"
    },
    {
        name: "Settings",
        icon: (className) => <AiOutlineSetting className={className} />,
        link: "/settings/category"
    },
]