import { useState } from "react";
import { Button } from "../../components/Button/styles";
import { Icon } from "../../components/Icon/styles";
import { NavModal } from "../../components/Modal";
import { Items, Nav, Title } from "./styles";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { ProfileImage } from "../../components/Profile";



export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    //Info ProfileImage
    const defaultImage = [
        {src: "src/assets/default.svg", label: "Default"}
    ]

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
                <ProfileImage options={defaultImage} onClick={onOpenModal}/>
            </Items>
        </Nav>
        <NavModal open={open} onCloseModal={onCloseModal} />
        </> 
    )
}