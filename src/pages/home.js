import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer }  from "../containers/jumbotron";
import { OptForm } from "../components";
import { Feature } from '../components'
import * as ROUTES from "../constants/routes"
export default function Home() {
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere Cancel Anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.ButtonLink to={ROUTES.SIGN_UP} >SUBSCRIBE NOW!</OptForm.ButtonLink> 
                        <OptForm.Break />    
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership. </OptForm.Text>
                    </OptForm>
                </Feature>

            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            
            
        </>
    );
}