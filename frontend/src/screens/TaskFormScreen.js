import React, {useState, useEffect} from 'react'
import {  Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Layout from '../components/Layout'

import { addNewTask, updateTask } from '../redux/actions/tasksAction'
import { store } from '../redux/store'
import { useSelector } from 'react-redux'

const TaskFormScreen = ({navigation, route}) => {


    const [editing, setEditing] = useState(false)
    const [ task, setTask ] =  useState ({
        id: '',
        title: '',
        description: ''
    })

    const taskCount = useSelector(state => state.tasksReducer.contador)
    useEffect(() => {
        console.log("contador", taskCount)
      handleChange('id', taskCount+1)
    
    }, [taskCount])
    
    const handleChange = (name, value) => setTask({ ...task, [name]: value})

    const handleSubmit = () => {
        try {
            if (!editing){
                console.log("submit")
                store.dispatch(addNewTask(task))
            }
            else {
                //store.dispatch(deleteTask(task.id))
                store.dispatch(updateTask(task))
            }
            navigation.navigate("HomeScreen")
        } catch (error) {
            console.log("error", error)
        }  
    }

    const selectedTask = useSelector(state => state.tasksReducer.task)

    useEffect(() => {
        if(route.params && route.params.id){
            setEditing(true)
            navigation.setOptions({
                headerTitle: 'Editar Tarea'
            });
            setTask(selectedTask)
        }
    }, [])

    return (
        <Layout>
            <TextInput 
                placeholder="Titulo"
                placeholderTextColor= "#546574"
                style = {styles.input} 
                onChangeText = { (text) => handleChange('title', text)}
                value = { task.title }
                maxLength = {40}
            />
            <TextInput 
                placeholder="Descripcion" 
                placeholderTextColor= "#546574"
                style = {styles.input} 
                onChangeText = { (text) => handleChange('description', text) }
                value = { task.description }
                maxLength = {144}
            />

            {
                !editing ?  (
                    <TouchableOpacity style = {styles.buttonSave} onPress={handleSubmit}>
                        <Text style= {styles.buttonText}>Guardar Tarea</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style = {styles.buttonUpdate} onPress={handleSubmit}>
                        <Text style= {styles.buttonText}>Editar Tarea</Text>
                    </TouchableOpacity>
                )
            }
            
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: 50,
        fontSize: 18,
        marginBottom: 7,
        borderWidth: 1,
        borderColor: "#10ac84",
        color: "#ffffff",
        textAlign: "center",
        borderRadius: 5,
        padding: 4,
        marginTop: 20
    },
    buttonSave: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#10ac84",
        width: "90%",
        marginTop: 20
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18
    },
    buttonUpdate: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#e58e26",
        width: "90%"
    }
})

export default TaskFormScreen
