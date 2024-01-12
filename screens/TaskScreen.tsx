
// screens/Screen1.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Task } from '../services/interfaces/task';
import { listTaskApi } from '../services/task';


const TaskScreen = ({ navigation }) => {

    const [ tasks, setTasks ] = useState<Task[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getTaskData = async () => {
        setIsLoading(true)
        try {
            const listTasksResponse = await listTaskApi()
            const { data } = listTasksResponse
            console.log(data)
            setTasks(data)
        } catch(err) {
            const errorMessage = err.response
            alert(errorMessage)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getTaskData()
    }, [])

    

    const renderTask = ({ item }: { item: Task }) => {
        return (
        <TouchableOpacity style={styles.listItem} onPress={() => {
            navigation.navigate("DetailTaskScreen", { taskId: item.id })
        }}> 
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskContent}>{item.content}</Text>
        </TouchableOpacity>
       
        )
    } 

    return (
        <View style={styles.container}>
        <Text style={styles.screenTitle}>Danh sách công việc</Text>
        <Button onPress={() => {
            navigation.navigate('AddTaskScreen')
        }} title='Thêm công việc' />
       <FlatList 
            onRefresh={getTaskData} 
            refreshing={isLoading}
            style={styles.listTask} 
            data={tasks} 
            renderItem={(item) => renderTask(item)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenTitle: {
        fontSize: 22,
        padding: 10
    },
    listTask: {
        flex: 1,
    },
    listItem: {
        height: 100,
        width: "100%",
        marginBottom: 1,
        backgroundColor: "#fff",
        padding: 10,
        justifyContent: "center"
    },
    taskTitle: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 5
    },
    taskContent: {

    }
})

export default TaskScreen;