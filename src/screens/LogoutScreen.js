import React from "react";
import { Center, Button,ButtonText,Box } from "@gluestack-ui/themed";
import ListItem from "../components/ListItem";
import { useDispatch } from "react-redux";
import {logout} from "../redux/accountSlice"

const LogoutScreen =()=>{
    const dispatch = useDispatch();
    return(
        <Box mt="$1" borderBottomWidth="$1" borderColor="lightgray">
          <Center>
            <Button w="90%" mt="$10" size="lg" action="secondary"
             onpress={()=>{
                dispatch(logout());
             }}
            >
                <ButtonText>Logout</ButtonText>
            </Button>
          </Center>    
        </Box>

    );
};

export default LogoutScreen;