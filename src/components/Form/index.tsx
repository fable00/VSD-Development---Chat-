import { useForm } from "react-hook-form"
import { FormStyles, Input } from "./styles"
import { Button } from "../Button/styles"
import { Figures } from "../Icon/styles";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";
import { Languages } from "../Languages";
import { ProfileImage } from "../Profile";


interface FormProps {
    isLogin: boolean
}

//Dropdown
    const dropdownOptions = Languages()
    const defaultOption = {value: '', label: 'Selecione seu idioma'}

//ProfileImage
    const defaultImage = [
        {src: "src/assets/default.svg", label: "Girl 1"},
    ]





export const Form: React.FC<FormProps> = ({ isLogin }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    console.log(errors)

    //Language
        const [selectedLanguage, setSelectedLanguage] = useState<Option>(defaultOption)
        const onSelect = (option: Option) => {setSelectedLanguage(option)}
        
        const onSubimt = (data: any) => { 
            const formData = {...data, language: selectedLanguage.value}
            console.log(formData)
        }

    return (
        <FormStyles onSubmit={handleSubmit(onSubimt)}>
            {!isLogin && (
                <>
                    <Figures>
                        <ProfileImage options={defaultImage} style={{width: "7.5vw", height: "15vh"}}/>
                    </Figures>
                    
                    <Dropdown options={dropdownOptions} onChange={onSelect} value={defaultOption} placeholder={"Selecione seu idioma de origem"} />

                    <p>{errors.name?.message}</p>
                    <Input {...register("name", {required : "Por favor preencha esse campo."} )} type="text" placeholder="Insira seu nome" />


                </>
            )}
            
            <p>{errors.email?.message}</p>
            <Input {...register("email", {required : "Por favor preencha esse campo."} )} placeholder="Insira seu melhor email" type="email" />
            
            <p>{errors.password?.message}</p>
            <Input {...register("password", {
                required : "Por favor preencha esse campo.", minLength: {value: 8, message: "A senha deve conter pelo menos 8 caracteres"} 
                })} placeholder="Insira sua melhor senha" type="password" />
            
            <Button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</Button>
        </FormStyles>
    )
}
