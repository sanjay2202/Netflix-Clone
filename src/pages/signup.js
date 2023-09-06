import React , { useState , useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from '../components';
import { useHistory } from "react-router-dom";
import * as ROUTES from '../constants/routes'


export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === "" || password === "" || emailAddress === "";

    const handleSignup = (event) => {
        event.preventDefault();
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    history.push(ROUTES.BROWSE);
                })
            ).catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message)

            });
         
    };
    

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        placeholder="First name"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                    <Form.Input  
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input 
                        type="password"
                        value={password}
                        placeholder="password"
                        autoComplete="off"
                        onChange={({ target }) => setPassword(target.value)}

                    />
                    <Form.TitleSmall>Gender:</Form.TitleSmall>
                    <Form.Base1>
                        
                        <Form.InputGender type="radio" name="gender" value="Male" />
                        <Form.TextSmall1>Male </Form.TextSmall1> 
                        
                        <Form.InputGender type="radio" name="gender" value="Female" />
                        <Form.TextSmall1>Female </Form.TextSmall1>
                        
                        <Form.InputGender type="radio" name="gender" value="Other" />
                        <Form.TextSmall1>Other </Form.TextSmall1>
                    </Form.Base1>
                    <br></br>
                    <Form.Title>Choose a Subscription Plan:</Form.Title>
                    <Form.Sub>1 Month / $11.99</Form.Sub>
                    <Form.Sub>3 Month / $19.99</Form.Sub>
                    <Form.Sub>6 Month / $29.99</Form.Sub>
                    <Form.Sub>Annual / $49.99</Form.Sub>
                    <Form.Base1>
                        <Form.InputGender class="input2" type="checkbox" name="checkbox1" value="1" required />
                        <Form.TitleSmall>Agree to the terms & conditions.</Form.TitleSmall>
                    </Form.Base1>
                    
                    
                     
                    <Form.Submit disabled={isInvalid} type="submit" >Sign up</Form.Submit>
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.                    
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    );
}