import React from 'react';
import {Text,HStack,Pressable} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListItem =({title,destiation})=>{
    const {navigate}=useNavigation();
    return(
        <Pressable
        onPress={()=>{
            destiation ? navigate(destination):null;
        }
        }
        >
        <HStack
        bg="white"
        px="$4"
        py="$3"
        borderTopWidth={1}
        borderColor="lightgray"
        justifyContent="space-between"
        >
        <Text size={16}>{title}</Text>
        <AntDesign name="right" color="gray"
        size={16}/>
        </HStack>
        </Pressable>
    );
}

export default ListItem;