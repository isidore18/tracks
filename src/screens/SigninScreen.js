import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationEvents} from 'react-navigation';
import AuthForm from './components/AuthForm';
import NavLInk from './components/NavLinks';
import { Context } from '../context/AuthContext';


const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context)
    return (
        <View style={styles.container}>
            <NavigationEvents 
                // onWillBlur does not trigger the function but onWillFocus does
                onWillFocus={ clearErrorMessage }
            />
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit= {signin}
                submitButtonText="Sign In"

            />
            <NavLInk 
                text="Don't have an account ? Go to Sign Up" 
                routeName="Signup"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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
})

export default SigninScreen;
