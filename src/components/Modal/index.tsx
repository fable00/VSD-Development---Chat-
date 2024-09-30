import React, { useState } from "react"
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css'
import { Container, Text, Title } from "./styles"
import { Form } from "../Form"


interface NavModalProps {
    open: boolean,
    onCloseModal: () => void
}


export const NavModal: React.FC<NavModalProps> = ({ open, onCloseModal }) => {
    const [option, setOption] = useState(0)

    const cadOption = () => setOption(0)
    const loginOption = () => setOption(1)

    return (
        <Container>
            <Modal open={open} onClose={onCloseModal} center>
                <Title>
                    <Text onClick={cadOption}>Cadastro</Text>
                    <Text onClick={loginOption}>Login</Text>
                </Title>
                <Form isLogin={option == 1} />
            </Modal>
        </Container>
    )
}