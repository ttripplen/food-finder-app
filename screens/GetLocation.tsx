import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const restaurants = [
    {
        id: '1',
        name: 'Sunny Side Café',
        address: '123 Morning St, Sunrise City',
        open: 'Opens at 8:00 AM',
        rating: '4.8',
        distance: '2.3km',
        time: '25 minutes',
        image: require('../assets/loading.png'),
        history: '20.05.2025',
    },
    {
        id: '2',
        name: 'The Spicy Grill',
        address: '45 Pepper Lane, Downtown',
        open: 'Opens at 8:00 AM',
        rating: '4.5',
        distance: '3.2km',
        time: '27 minutes',
        image: require('../assets/loading.png'),
        history: '20.05.2025',
    },
    {
        id: '3',
        name: 'Bamboo Noodle House',
        address: '89 Lotus Ave, River District',
        open: 'Opens at 8:00 AM',
        rating: '4.5',
        distance: '3.2km',
        time: '27 minutes',
        image: require('../assets/loading.png'),
        history: '20.05.2025',
    },
    {
        id: '4',
        name: 'Sunny Side Café',
        address: '123 Morning St, Sunrise City',
        open: 'Opens at 8:00 AM',
        rating: '4.8',
        distance: '2.3km',
        time: '25 minutes',
        image: require('../assets/loading.png'),
        history: '22.05.2025',
    },
    {
        id: '5',
        name: 'The Spicy Grill',
        address: '45 Pepper Lane, Downtown',
        open: 'Opens at 8:00 AM',
        rating: '4.5',
        distance: '3.2km',
        time: '27 minutes',
        image: require('../assets/loading.png'),
        history: '24.05.2025',
    },
    {
        id: '6',
        name: 'Bamboo Noodle House',
        address: '89 Lotus Ave, River District',
        open: 'Opens at 8:00 AM',
        rating: '4.5',
        distance: '3.2km',
        time: '27 minutes',
        image: require('../assets/loading.png'),
        history: '27.05.2025',
    },
];

interface Restaurant {
    id: string;
    name: string;
    address: string;
    open: string;
    rating: string;
    distance: string;
    time: string;
    image: any;
    history: string;
}

const groupByHistory = (data: Restaurant[]) => {
    const grouped: { [key: string]: Restaurant[] } = {};

    data.forEach((item: Restaurant) => {
        if (!grouped[item.history]) {
            grouped[item.history] = [];
        }
        grouped[item.history].push(item);
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
    });

    return { grouped, sortedDates };
};


const GetLocation = () => {
    const { grouped, sortedDates } = groupByHistory(restaurants);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.locationSearch}>
                <View>
                    <Text style={styles.locationTitle}>Location Request History</Text>
                </View>
                <View style={styles.searchRow}>
                    <View style={styles.searchBox}>
                        <Ionicons name="search" size={20} color="#3971b8" />
                        <TextInput placeholder="Search" style={styles.input} />
                    </View>
                    <TouchableOpacity style={styles.customIconButton}>
                        <Ionicons name="options-outline" size={22} color="#3971b8" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                {sortedDates.map((date) => (
                    <View key={date}>
                        <Text style={styles.sectionTitle}>🗒️ {date}</Text>
                        {grouped[date].map((item) => (
                            <View key={item.id} style={styles.restaurantCard}>
                                <Image source={item.image} style={styles.restaurantImage} />
                                <View style={styles.restaurantInfo}>
                                    <Text style={styles.restaurantName}>{item.name}</Text>
                                    <Text style={styles.restaurantDetail}>{item.address}</Text>
                                    <Text style={styles.restaurantDetail}>{item.open}</Text>
                                    <Text style={styles.restaurantDetail}>
                                        ⭐ {item.rating} · 📍 {item.distance} · ⏱️ {item.time}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default GetLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfcee',
    },
    locationSearch: {
        flex: 1,
        width: "100%",
        height: 180,
        backgroundColor: "#3971b8",
        borderRadius: 0,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
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
    content: {
        marginTop: 170,
        paddingHorizontal: 20,
    },
    locationTitle: {
        color: '#3971b8',
        fontWeight: '500',
        fontSize: 20,
        padding: 10,
        backgroundColor: '#f8eba8',
        textAlign: 'center',
        borderRadius: 8,
    },
    locationText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5,
    },
    searchBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        height: 50,
        width: "84%"
    },
    input: {
        flex: 1,
        color: '#a8b874',
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    customIconButton: {
        marginLeft: 12,
        backgroundColor: '#f8eba8',
        padding: 10,
        borderRadius: 12,
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 8,
        color: "#3971b8"
    },

    restaurantCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 4,
        borderRadius: 12,
        elevation: 2,
        padding: 8,
        alignItems: 'center',
    },
    restaurantImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    restaurantInfo: {
        marginLeft: 12,
        flex: 1,
    },
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    restaurantDetail: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
    },
});
// #c8d69b Tea Green
// #a8b874
// #f6e6a5 Vanilla
// #f8eba8
// #3971b8 Celtic Blue
// #fbfcee Ivory
// #343b1b Drab Dark Brown