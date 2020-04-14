// @ts-nocheck
import React, {useContext} from 'react';
import { View, StyleSheet,} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents} from 'react-navigation'
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLinks'

const SignupScreen = () => {
    const {state, signup, clearErrorMessage,} = useContext(AuthContext);

    return <View style={styles.container}> 
    <NavigationEvents 
        onWillFocus={clearErrorMessage}
    />
    <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
    />
    <NavLink 
        routeName="Signin"
        text="Already have an account ? Go to Sign In"
    />

    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }, 
    link :{ 
        color: 'blue'
    }
})

export default SignupScreen;
