import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { getRutasLecturista, deleteTask } from '../api'
import TaskItem from './TaskItem'


const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const loadTasks = async () => {
        const data = await getRutasLecturista();
        setTasks(data)
    }

    useEffect(() => {
        loadTasks();
    }, [])


    const renderItem = ({item}) => {
        return (
            <TaskItem task={item} handleDelete={handleDelete} />
        )
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)
        await loadTasks();
        setRefreshing(false)
    })

    const handleDelete = async (id) => {
        
        deleteTask(id);
        loadTasks();
    }

    return (
        
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
        
    )
}

export default TaskList
