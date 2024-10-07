import { useState } from "react";
import { Button } from "../Button/styles";
import { Icon } from "../Icon/styles";
import { NavModal } from "../Modal";
import { Items, Nav, Title } from "./styles";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { ProfileImage } from "../ProfileImage";
import { ImageOptions } from "../Images";



export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    //Info ProfileImage
    const images = ImageOptions()
    return (
        <>
        <Nav>
            <Title>Chat</Title>
            <Items>
                <Button>
                    Home 
                    <Icon>
                    <IoHomeOutline />
                    </Icon>
                </Button>
                <Button>
                    Mensagens
                    <Icon>
                    <TbMessageCircle />
                    </Icon>
                </Button>
                <ProfileImage option={images[0]} onClick={onOpenModal}/>
            </Items>
        </Nav>
        <NavModal open={open} onCloseModal={onCloseModal} />
        </> 
    )
}