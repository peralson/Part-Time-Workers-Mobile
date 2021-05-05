// React
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

// React Native
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

// Constants
import Colors from '../../constants/Colors'

// Redux
import { useDispatch } from 'react-redux'

// Actions
import * as profileActions from '../../store/actions/profile'

const EditProfile = props => {
    const action = props.route.params.action
    const id = props.route.params.id

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)

    useFocusEffect(
        useCallback(() => {
            setIsLoading(true)

            if (action === 'update_general') {
                const updateProject = async () => {
                    await dispatch(
                        projectActions.updateProject(
                            id,
                            props.route.params.name,
                            props.route.params.category,
                            props.route.params.description,
                            props.route.params.address,
                            props.route.params.date,
                            props.route.params.lat,
                            props.route.params.lng,
                        )
                    )
                    setIsLoading(false)
                    props.navigation.navigate(
                        'Home',
                        { screen: 'Proyectos' }
                    )
                }
                updateProject()
            }

        }, [dispatch, setIsLoading])
    )

    return (
        <View style={styles.screen}>
            {isLoading ? (
                <View>
                    <ActivityIndicator color={Colors.primary} size="large" style={styles.indicator} />
                    <Text style={styles.title}>Editando...</Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.title}>Editado correctamente</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    indicator: {
        paddingBottom: 32
    },
    title: {
        fontFamily: 'gotham-bold',
        color: Colors.primary,
        fontSize: 14,
    }
})

export default EditProfile
