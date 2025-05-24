// import React, { useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
//   Platform,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';

// type RootStackParamList = {
//   SplashScreen: undefined;
//   HomeScreen: {
//     location: {
//       latitude: number;
//       longitude: number;
//     };
//     restaurants: any[];
//   };
// };

// type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

// const SplashScreen: React.FC = () => {
//   const navigation = useNavigation<NavigationProp>();

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       try {
//         const permissionStatus = await request(
//           Platform.OS === 'ios'
//             ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//             : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//         );

//         if (permissionStatus === RESULTS.GRANTED) {
//           Geolocation.getCurrentPosition(
//             async position => {
//               const { latitude, longitude } = position.coords;
//               console.log('📍 Toạ độ:', latitude, longitude);

//               // Gọi API mock (ở đây giả lập bằng một URL mẫu)
//               const response = await fetch(
//                 `https://your-api.com/restaurants?lat=${latitude}&lng=${longitude}`
//               );
//               const data = await response.json();

//               // Điều hướng sang HomeScreen với dữ liệu
//               navigation.replace('HomeScreen', {
//                 location: { latitude, longitude },
//                 restaurants: data,
//               });
//             },
//             error => {
//               console.error(error);
//               Alert.alert('Lỗi', 'Không thể lấy vị trí người dùng.');
//             },
//             {
//               enableHighAccuracy: true,
//               timeout: 15000,
//               maximumAge: 10000,
//             }
//           );
//         } else {
//           Alert.alert('Yêu cầu quyền', 'Vui lòng cấp quyền truy cập vị trí.');
//         }
//       } catch (error) {
//         console.error(error);
//         Alert.alert('Lỗi', 'Có lỗi xảy ra khi lấy vị trí.');
//       }
//     };

//     requestLocationPermission();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Đang tải dữ liệu và vị trí...</Text>
//       <ActivityIndicator size="large" color="#007AFF" />
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 20
//   }
// });


import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Loading: undefined;
    Login: undefined;
    Main: undefined;
};

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, "Loading">;

const LoadingScreen: React.FC = () => {
    const navigation = useNavigation<LoadingScreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Main");
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/loading.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.card}>

                <Text style={styles.title}>Please wait...</Text>
                <Text style={styles.subtitle}>
                    The system is determining your current location to display relevant places.
                </Text>
                <View style={styles.transparentBox}>
                    <Text style={styles.boxText}>13/1 đường số 20, Hiệp Bình Chánh, Thủ Đức</Text>
                </View>
                <ActivityIndicator size="large" color="#316fb6" style={styles.loader} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32d2c3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: "100%",
        height: "43%",
        backgroundColor: "#fbfcee",
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
    image: {
        width: "100%",
        height: 500,
        position: "absolute",
        top: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#3971b8',
        marginBottom: 8,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
        color: '#777',
        marginBottom: 16,
    },
    loader: {
        marginTop: 30,
    },
    transparentBox: {
        backgroundColor: 'rgba(200, 214, 155, 0.4)',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxText: {
        fontSize: 14,
        color: '#343b1b',
        fontWeight: '400',
        textAlign: "center"
    },
});

export default LoadingScreen;