import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState ,useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Actions from '../Redux/Actions'

export default function SignUp() {



    const reducerValues = useSelector((state)=>state.AuthReducer.LoginUserDetails)
    console.log("first",reducerValues)
    // const ProfileReducer = useSelector((state)=>state.ProfileReducer)
    const addNum = () => {Actions.SignIn(reducerValues)}
    const subNum = () => {Actions.Logout(reducerValues)}
    // const mulNum = () => {dispatch(Actions.EditProfile(ProfileReducer))}
    return (
        <View style={styles.container}>
            <Text>SignUp</Text>
            {/* <Text>{reducerValues}</Text> */}
            {/* <Text>{ProfileReducer}</Text> */}

            <Button title='Add' onPress={() => { addNum() }} />
            <Button title='Sub' onPress={() => { subNum() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#393900',
        justifyContent: 'center',
        alignItems: 'center'
    }
})