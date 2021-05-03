// React
import React from 'react'

// React Native
import { StyleSheet } from 'react-native'

// Components
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormWrapper = ({ children }) => (
    <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false} 
        style={styles.wrapper}
        extraHeight={240}
    >
        {children}
    </KeyboardAwareScrollView>
)

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 32,
        paddingTop: 16
    }
})

export default FormWrapper
