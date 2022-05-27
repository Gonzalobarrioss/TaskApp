import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { setTask } from '../redux/actions/tasksAction'
import { store } from '../redux/store'

const TaskItem = ({task, handleDelete}) => {

    const navigation = useNavigation()

    const handleSetTask = (task) => {
        store.dispatch(setTask(task))
        navigation.navigate("TaskFormScreen", { id: task.id })
    }

    const confirmDelete = () => {
        Alert.alert(
            `Atencion`,
            `Confirme eliminar tarea`,
            [
                {
                    text: "Confirmar",
                    onPress: () => {

                        try {
                            handleDelete(task.id)
                        } catch (error) {
                            Alert.alert("No se pudo eliminar la tarea")
                        }
                        
                    }
                },
                {
                    text: "Cancelar",
                    onPress: () => {
                    },
                    style: "cancel"
                }              
            ],
            {
                cancelable: true
            }
        )
    }

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity 
                onPress= { () => handleSetTask(task)}
            >
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemDescripcion}>{task.description}</Text>
            </TouchableOpacity>
            
        
            <TouchableOpacity 
                style={ styles.buttonDelete }
                onPress= { () => confirmDelete() }    
            >
                <Text style={{ color: "#fff"}}>X</Text>
            </TouchableOpacity>
        
        </View>


    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:"#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        maxWidth: 300
    },
    itemDescripcion: {
        color: "#ffffff",
        display: "flex",
        maxWidth: 300
    },   
    buttonDelete: {
        display: "flex",
        position: "relative",
        backgroundColor: "#ee5253", 
        padding: 10, 
        borderRadius: 5
    }
})

export default TaskItem
