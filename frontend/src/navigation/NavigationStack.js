import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';    

import HomeScreen from '../screens/HomeScreen'
import TaskFormScreen from '../screens/TaskFormScreen'

const Stack = createNativeStackNavigator()    

export default NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="HomeScreen" 
                component ={HomeScreen}
                options = {({navigation})=>({
                    title: "Tareas",
                    headerStyle: { backgroundColor: "#222f3e" },
                    headerTitleStyle: { color: "#ffffff" },
                    headerRight: () => (
                    <TouchableOpacity onPress={ () => navigation.navigate("TaskFormScreen")}> 
                        <Text style={{color: "#ffffff", marginRight:20, fontSize: 15}}>Nueva Tarea</Text>
                    </TouchableOpacity>
                    
                    ),
                })}  
                />
                <Stack.Screen
                name="TaskFormScreen"
                component = {TaskFormScreen} 
                options = {{
                    title: "Crea una tarea",
                    headerStyle: { backgroundColor: "#222f3e" },
                    headerTitleStyle: { color: "#ffffff" },
                    headerTintColor: "#ffffff"
                }}
                />
                
                
            </Stack.Navigator>
        </NavigationContainer>

    )
}
    