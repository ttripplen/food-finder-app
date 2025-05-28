import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const topRatedPlaces = [
    {
        id: '1',
        title: 'Pastel iced donuts',
        time: '30 Mins',
        author: 'heather ford',
        rating: 5,
        reviews: 1567,
        image: require('../assets/loading.png'),
    },
    {
        id: '2',
        title: 'Berry Smoothie',
        time: '20 Mins',
        author: 'jane smith',
        rating: 4,
        reviews: 832,
        image: require('../assets/loading.png'),
    },
    {
        id: '3',
        title: 'Pastel iced donuts',
        time: '30 Mins',
        author: 'heather ford',
        rating: 5,
        reviews: 1567,
        image: require('../assets/loading.png'),
    },
    {
        id: '4',
        title: 'Berry Smoothie',
        time: '20 Mins',
        author: 'jane smith',
        rating: 4,
        reviews: 832,
        image: require('../assets/loading.png'),
    },
];

const SaveLocation: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/loading.png')}
                    style={styles.image}
                />
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText}>
                        One tap to save,{"\n"}many memories to come
                    </Text>
                </View>
            </View>

            <View style={styles.searchContainer}>
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
            <ScrollView style={styles.card}>
                <FlatList
                    data={topRatedPlaces}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.ratingSection}>
                            <Image source={item.image} style={styles.imageRating} />
                            <View style={styles.cardContent}>
                                <Text style={styles.category}>Saving Location</Text>
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.author}>by {item.author}</Text>
                                <View style={styles.row}>
                                    <View style={styles.stars}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Icon
                                                key={i}
                                                name="star"
                                                size={14}
                                                color={i < item.rating ? '#f7c844' : '#ddd'}
                                                style={{ marginRight: 2 }}
                                            />
                                        ))}
                                    </View>
                                    <View style={styles.reviewBox}>
                                        <Icon name="user" size={12} color="#aaa" />
                                        <Text style={styles.reviewText}> {item.reviews}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfcee',
        position: 'relative',
    },
    imageContainer: {
        flex: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayTextContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 85,
        paddingHorizontal: 20,
    },
    overlayText: {
        fontSize: 30,
        color: '#fbfcee',
        lineHeight: 38,
        fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    searchContainer: {
        position: 'absolute',
        top: 200,
        left: 20,
        right: 20,
        backgroundColor: '#c8d69b',
        borderRadius: 10,
        padding: 20,
        zIndex: 10,
    },
    searchText: {
        color: 'white',
        fontSize: 16,
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
    },
    customIconButton: {
        marginLeft: 12,
        backgroundColor: '#fbfcee',
        padding: 10,
        borderRadius: 12,
    },
    card: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 450,
        backgroundColor: '#fbfcee',
        padding: 26,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
    },
    ratingSection: {
        marginBottom: 15,
    },
    imageRating: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    cardContent: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: -20,
        marginHorizontal: 10,
        zIndex: 1,
    },
    category: {
        fontSize: 12,
        color: '#aaa',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#3971b8',
        flex: 1,
        flexWrap: 'wrap',
    },
    time: {
        fontSize: 12,
        color: '#aaa',
        marginLeft: 8,
    },
    author: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    stars: {
        flexDirection: 'row',
        marginTop: 8,
    },
    reviewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        marginTop: 8,
    },
    reviewText: {
        fontSize: 11,
        color: '#666',
    },
});


export default SaveLocation;
