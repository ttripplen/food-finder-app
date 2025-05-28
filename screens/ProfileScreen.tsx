import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Switch,
    Image
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }: any) => {
    const [pushNotifications, setPushNotifications] = useState(true);
    const [followRequest, setFollowRequest] = useState(true);
    const [promotions, setPromotions] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogout = () => {
        alert("You have logged out!");
        navigation.navigate("Login");
    };

    useEffect(() => {
        const getUsername = async () => {
            const storedUsername = await AsyncStorage.getItem("currentUser");
            if (storedUsername) {
                setUsername(storedUsername);
            }
        };
        getUsername();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.inforBox}>
                <Image
                    source={require('../assets/loading.png')}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Jenny Wilson</Text>
                <Text style={styles.address}>Sr. UI/UX Designer</Text>

            </View>
            <ScrollView style={styles.content}>
                <View style={styles.contain}>
                    <Text style={styles.sectionTitle}>Account</Text>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Edit profile</Text>
                        <Feather name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Change your password</Text>
                        <Feather name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>Get location history</Text>
                        <Feather name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>

                </View>
                <View style={styles.contain}>
                    <Text style={styles.sectionTitle}>Notifications</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.menuText}>Push notifications</Text>
                        <Switch
                            value={pushNotifications}
                            onValueChange={setPushNotifications}
                            trackColor={{ false: "#ccc", true: "#e3ecc8" }}
                            thumbColor={pushNotifications ? "#c8d69b" : "#fff"}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.menuText}>Follow request</Text>
                        <Switch value={followRequest}
                            onValueChange={setFollowRequest}
                            trackColor={{ false: "#ccc", true: "#e3ecc8" }}
                            thumbColor={followRequest ? "#c8d69b" : "#fff"} />
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.menuText}>Promotions & Offers</Text>
                        <Switch
                            value={promotions}
                            onValueChange={setPromotions}
                            trackColor={{ false: "#ccc", true: "#e3ecc8" }}
                            thumbColor={promotions ? "#c8d69b" : "#fff"}
                        />
                    </View>
                </View>
                <View style={styles.contain}>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfcee",
    },
    content: {
        marginTop: 240,
    },
    contain: {
        paddingHorizontal: 20,
    },
    inforBox: {
        flex: 1,
        width: "100%",
        height: 240,
        backgroundColor: "#3971b8",
        borderRadius: 0,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        position: "absolute",
        top: 0,
        justifyContent: "center",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: "#c8d69b",
    },
    inforTitle: {
        color: '#fbfcee',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f6e6a5',
    },
    address: {
        fontSize: 14,
        color: '#e0e0e0',
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        color: "#a8b874"
    },
    menuItem: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    menuText: {
        fontSize: 16,
        color: "#45413E",
    },
    switchContainer: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    logoutButton: {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: "#a8b874",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    logoutText: {
        color: "#fbfcee",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ProfileScreen;