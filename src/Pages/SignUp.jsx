import React, {useState,useContext} from 'react'
import './Style.css'
import {Flex,Box,Heading,FormControl,FormLabel,Input,Button,Link,Image} from '@chakra-ui/react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContextProvider";
import { ACTION_TYPE } from "../Context/action";
function SignUp() 
{
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const Navigate = useNavigate();
    
    const { state, dispatch } = useContext(Authcontext);
    const { isLoading } = state;
     console.log(`Email :`,email)
     console.log(`Password :`,password)

     const handleSubmit = (e)=>
   {
      e.preventDefault();
      dispatch({ type: ACTION_TYPE.SIGN_UP_REQUEST });
     axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjtxI56rKMb3agEhqWfWMYguQhRvFEI94",
      {
        email:email,
        password:password,
        returnSecureToken:true,
      })
      .then((res)=>
      {
        dispatch({ type: ACTION_TYPE.SIGN_UP_SUCCESS, payload: res.data });
        localStorage.setItem("user", res.data.idToken);
        Navigate("/login");
        console.log("res",res)
        setEmail("")
        setPassword("")
      })
      .catch(err=>{
        dispatch({ type: ACTION_TYPE.SIGN_UP_FAILURE});
        alert("Something went wrong. please refresh.");
      })
   }
   
    return (
        <div className="signup-optimus">
        <div>
        <Link href="/">
       <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" width="160px" height="50px" alt="Matrix"  />
      </Link> 
        </div>
        <Flex align="center" justifyContent="center" mt={10}>
          <Box  p={8} maxWidth="500px" borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
              <Heading>Create your account below to get started.</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit}>
                <FormControl  isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input  
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email Address" />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Password</FormLabel>
                  <Input 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password" 
                  placeholder="Create Password" />
                </FormControl>
                <Button  disabled={isLoading} color="black" type="submit" variant="ghost" width="full" mt={4}>
                  Sign Up For Free
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
        </div>
      );
}
export default SignUp