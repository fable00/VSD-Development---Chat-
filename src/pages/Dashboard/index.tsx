import { useState } from "react";
import { Button } from "../../components/Button/styles"
import { Container, Content, Image, Subtext } from "./styles"
import { NavModal } from "../../components/Modal";

export const Dashboard = ()=>{
    
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return(
        <>
        <Container>
            <Content>
                <Image src="src/pages/Dashboard/assets/tela.png" />
                <Subtext>
                    Cadastre-se já para essa aventura! 
                    <Button style={{padding: '20px', backgroundColor: 'greenyellow', color: '#333',}}  onClick={onOpenModal}>
                        Cadastrar
                    </Button>
                </Subtext>
            </Content>
        </Container>
        <NavModal open={open} onCloseModal={onCloseModal} />
        </>
    )
}