import { Button, Text, View } from 'react-native'
import React, { useState ,useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Actions from '../../../Redux/Actions'
import styles from './styles'
export default function SignUp() {

    // const reducerValues = useSelector((state)=>state.AuthReducer.LoginUserDetails)
    // console.log("first",reducerValues)
    // const ProfileReducer = useSelector((state)=>state.ProfileReducer)
    // const addNum = () => {Actions.SignIn(reducerValues)}
    // const subNum = () => {Actions.Logout(reducerValues)}
    // const mulNum = () => {dispatch(Actions.EditProfile(ProfileReducer))}


    return (
        <View >
            <Text>SignUp</Text>
        </View>
    )
}

