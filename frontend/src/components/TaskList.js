import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl, Text, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { deleteTask } from '../redux/actions/tasksAction'

import {store} from '../redux/store'
const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const focus = useIsFocused()

    const tasksList = useSelector( state => state.tasksReducer.tasks)

    const loadTasks = () => {
        setTasks(tasksList)
    }

    useEffect(() => {
        loadTasks();
    }, [tasksList])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        loadTasks();
        setRefreshing(false)
    })

    const handleDelete =  (id) => {
        store.dispatch(deleteTask(id))
        loadTasks();
    }

    const renderItem = ({item}) => {
        return (
            <TaskItem task={item} handleDelete={handleDelete} />
        )
    }

    return (
        <>
        {
            tasks.length ? 
            <FlatList
                style={{width: "100%"}} 
                data={tasks}
                keyExtractor = {(item) => item.id + ''}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl 
                        progressBackgroundColor = "#0a3d62"
                        colors={["#78e08f"]}
                        refreshing = { refreshing }
                        onRefresh = { onRefresh }
                    />
                }
            />
            :
            <Text style={styles.textMessage}>Crea una tarea para empezar</Text>
        }
        </>  
        
    )
}

const styles = StyleSheet.create({
    textMessage: {
        color: "#fff",
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: "400",
        display: 'flex',
        marginTop: 20
        
    }
})

export default TaskList
