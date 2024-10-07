import { ImageOptions } from "../Images"
import { ProfileImage } from "../ProfileImage"
import { Container } from "./styles"

export const UInfo = ()=>{
    const images = ImageOptions()
    return(
    <>
    <Container>
        <ProfileImage option={images[0]} style={{width: "7.5vw", height: "15vh"}}/> 
        <strong>UserName</strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam rerum, officia repellendus ad maiores nulla quam architecto quo placeat velit aut eius sit corrupti magni labore. Eos, soluta aliquam!</p>        
    </Container>
    
    </>
    )
}