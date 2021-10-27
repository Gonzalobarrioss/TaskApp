import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import Layout from '../components/Layout'
import { saveTask } from '../api'

const TaskFormScreen = ({navigation}) => {

    const [ task, setTask ] =  useState ({
        title: '',
        description: ''
    })

    const handleChange = (name, value) => setTask({ ...task, [name]: value})

    const handleSubmit = () => {
        saveTask(task)
        navigation.navigate("HomeScreen")
    }

    return (
        <Layout>
            <TextInput 
                placeholder="Write a title"
                placeholderTextColor= "#546574"
                style = {styles.input} 
                onChangeText = { (text) => handleChange('title', text)}
            />
            <TextInput 
                placeholder="Write a description" 
                placeholderTextColor= "#546574"
                style = {styles.input} 
                onChangeText = { (text) => handleChange('description', text) }
            />
            <TouchableOpacity style = {styles.buttonSave} onPress={handleSubmit}>
                <Text style= {styles.buttonText}>Save Task</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        fontSize: 14,
        marginBottom: 7,
        borderWidth: 1,
        borderColor: "#10ac84",
        height: 35,
        color: "#ffffff",
        textAlign: "center",
        borderRadius: 5,
        padding: 4
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#10ac84",
        width: "90%",
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center"
    }
})

export default TaskFormScreen
