import { FeedContainer } from "../../components/FeedContainer"
import { OnlineList } from "../../components/OnlineList"
import { UInfo } from "../../components/UInfo"
import { Container, Content } from "./styles"

export const Posts = () =>{
    return (
        <>
            <Container>
                <Content>
                    <UInfo />
                    <FeedContainer/>
                    <OnlineList />
                </Content>
            </Container>
        </>
    )
}