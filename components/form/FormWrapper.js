// React
import React from 'react'

// React Native
import { StyleSheet } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormWrapper = props => {
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false} 
            style={styles.wrapper}
            extraHeight={240}
        >
            {props.children}
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 32,
        paddingTop: 16
    }
})

export default FormWrapper
