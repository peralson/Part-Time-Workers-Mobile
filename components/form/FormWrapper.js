// React
import React from 'react'

// Components
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormWrapper = ({ children }) => (
    <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false} 
        style={{ paddingHorizontal: 16 }}
        extraHeight={240}
    >
        {children}
    </KeyboardAwareScrollView>
)

export default FormWrapper
