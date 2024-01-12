import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"



const HomeScreen = ({ navigation }) => {
    const [ height, setHeight ] = useState<number>(0)
    const [ weight, setWeight ] = useState<number>(0)
    
    const handleBMIButton = () => {
        navigation.navigate("ResultScreen", { 
            userData:  {
                weight,
                height
            }
        })
    }

    return (<View style={styles.container}>
        <Text style={styles.mainText}>TÍNH BMI</Text>
        <View style={styles.content}>
            <Text style={styles.label}>Nhập chiều cao (m)</Text>
            <TextInput onChangeText={(value) => {
                setHeight(Number(value))
            }} value={String(height)} placeholder="Chiều cao (m)" style={styles.input} />
            <Text style={styles.label}>Nhập cân nặng</Text>
            <TextInput onChangeText={(value) => {
                setWeight(Number(value))
            }} value={String(weight)} placeholder="Cân nặng (kg)" style={styles.input} />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={handleBMIButton}>
                <Text>Tính BMI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Nhập lại</Text>
            </TouchableOpacity>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20
    },
    mainText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "900"
    },
    content: {
        alignItems: "flex-start",
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#bbb",
        padding: 5,
        borderRadius: 5,
        width: "100%"
    },
    label: {
        marginVertical: 10
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20
    },
    button: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 15,
        borderRadius: 5,
        backgroundColor: "pink",
        width: "45%",
        alignItems: "center"
    }
})
export default HomeScreen