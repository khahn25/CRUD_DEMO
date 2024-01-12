import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import DetailTaskScreen from './screens/DetailTaskScreen';
import UpdateTaskScreen from './screens/UpdateTaskScreen';

const StackNavigator = createStackNavigator({
  TaskScreen: {
    screen: TaskScreen
  },
  AddTaskScreen: {
    screen: AddTaskScreen
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
  DetailTaskScreen: {
    screen: DetailTaskScreen
  },
  UpdateTaskScreen: {
    screen: UpdateTaskScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  HomeScreen: { screen:  HomeScreen}
}, {
  initialRouteName: "TaskScreen"
})

 
export default createAppContainer(StackNavigator)