import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { loginApi } from "../services/authentication"
import { validateEmail } from "../utils/validate"


const LoginScreen = () => {

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const login = async () => {
        if(!validateEmail(email)) {
            alert("Email không hợp lệ!")
        }
        try {
            const loginResponse = await loginApi({
                email,
                password
            })
            const {data} = loginResponse
            alert("Đăng nhập thành công!")
            //Lưu token lại

        } catch(err) {
            const {data} = err.response
            alert(data.message)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.mainText}>Đăng nhập</Text>
        <View style={styles.content}>
            
            <Text style={styles.label}>Email</Text>
            <TextInput value={email} onChangeText={(value) => {
                setEmail(value)
            }}  style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput value={password} onChangeText={(value) => {
                setPassword(value)
            }}   style={styles.input} /> 
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Nhập lại</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
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
export default LoginScreen