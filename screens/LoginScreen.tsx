import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import * as Location from "expo-location";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

// const API_URL = "https://669260ab346eeafcf46cb7b2.mockapi.io/loginData";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
    //   const response = await fetch(API_URL);
    //   const users = await response.json();
    //   const user = users.find((u: any) => u.username === email && u.password === password);

    //   if (!user) {
    //     Alert.alert("Error", "Invalid email or password");
    //     return;
    //   }

    //Thay vì lấy user từ API, giả sử user mặc định là email đã nhập
    const user = { username: email, id: "1", location: [] };

    // Lưu username vào AsyncStorage
    await AsyncStorage.setItem("currentUser", user.username);

      // Yêu cầu quyền lấy vị trí
    //   const { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status !== "granted") {
    //     Alert.alert("Permission Denied", "Please enable location permissions.");
    //     return;
    //   }

    //   // Lấy vị trí hiện tại
    //   const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High }).catch(() => null);
    //   if (!location) return;

    //   // Chuẩn bị object vị trí mới
    //   const newLocation = {
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //     timestamp: new Date().toISOString(),
    //   };

    //   // Cập nhật lịch sử vị trí lên API
    //   await fetch(`${API_URL}/${user.id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       location: Array.isArray(user.location) ? [...user.location, newLocation] : [newLocation],
    //     }),
    //   });

      navigation.replace("Main");
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Something went wrong");
    }
  };


  return (
    <View style={styles.container}>
      <Image source={require("../assets/login.jpg")} style={styles.image} />
      {/* <LinearGradient colors={["rgba(251, 211, 233, 0.4)", "rgba(245, 167, 184, 0.4)"]} style={styles.overlay} /> */}
      <View style={styles.welcomeText}>
        <Text style={styles.welcomeTextContent}>HI! WELCOME</Text>
        <Text style={styles.welcomeContent}>We are happy to see you again!</Text>
      </View>
      <View style={styles.loginBox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.footer}>
          <Text style={styles.link}>Forgot password?</Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Icon name="arrow-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: "120%",
    height: "65%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  welcomeText: {
    marginBottom: 250,
    paddingRight: 0,
  },
  welcomeTextContent: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#316fb6",
    textAlign: "right",
    textShadowRadius: 4,
  },
  welcomeContent: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#316fb6",
    textAlign: "right",
    textShadowRadius: 4,
  },
  loginBox: {
    width: "100%",
    height: "50%",
    backgroundColor: "#f8eba8",
    borderRadius: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fbfdf0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    color: "#333",
  },
  loginButton: {
    width: 50,
    height: 50,
    backgroundColor: "#316fb6",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",

  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },
  link: {
    color: "#316fb6",
    fontSize: 14,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  button: {
    backgroundColor: "#316fb6",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: "100%",
    paddingTop: 15,
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5,
  },
});

export default LoginScreen;