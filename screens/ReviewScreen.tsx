import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';


const reviews = [
    {
        id: '1',
        name: 'Jenny Wilson',
        date: 'Dec 10, 2024',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        rating: 5,
        comment: 'Very nice and comfortable hotel, thank you for accompanying my vacation!',
    },
    {
        id: '2',
        name: 'Guy Hawkins',
        date: 'Dec 10, 2024',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        rating: 5,
        comment: 'Very beautiful hotel, my family and I are very satisfied with the service!',
    },
    {
        id: '3',
        name: 'Kristin Watson',
        date: 'Dec 09, 2024',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        rating: 5,
        comment: "The rooms are very comfortable and the natural views are amazing, can't wait to come back again!",
    },
    {
        id: '4',
        name: 'Devon Lane',
        date: 'Dec 08, 2024',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        rating: 4,
        comment: 'Nice place but a bit noisy at night.',
        image: 'https://randomuser.me/api/portraits/men/4.jpg'
    }

];

const ratingsDistribution = [
    { stars: 5, percent: 70 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 4 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 5 },
];

type RootStackParamList = {
    Loading: undefined;
    Login: undefined;
    Main: undefined;
    Details: undefined;
};
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, "Details">;

const ReviewScreen = () => {

    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const [selectedFilter, setSelectedFilter] = useState('All');
    const filteredReviews = selectedFilter === 'All'
        ? reviews
        : reviews.filter((item) => item.rating === parseInt(selectedFilter));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Details')}>
                    <Icon name="chevron-left" size={16} color="#3971b8" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.editButton}>
                    <Icon name="pencil" size={16} color="#3971b8" />
                </TouchableOpacity>
            </View>
            <View style={styles.summary}>
                <Text style={styles.averageRating}>4.8</Text>
                <View style={styles.stars}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="star" size={20} color="#e6c44f" />
                    ))}
                </View>
                <Text style={styles.reviewCount}>4,981 reviews</Text>
            </View>

            {ratingsDistribution.map((item) => (
                <View key={item.stars} style={styles.ratingRow}>
                    <Text>{item.stars} </Text>
                    <Icon name="star" size={14} color="#e6c44f" />
                    <View style={styles.progressBarBackground}>
                        <View
                            style={[styles.progressBar, { width: `${item.percent}%` }]}
                        />
                    </View>
                    <Text style={{ color: '#343b1b', fontWeight: 'bold' }}>{item.percent}%</Text>
                </View>
            ))}
            <View style={styles.filterRow}>
                {['All', '5', '4', '3', '2', '1'].map((filter) => (
                    <TouchableOpacity
                        key={filter}
                        style={[
                            styles.filterButton,
                            selectedFilter === filter && styles.selectedFilterButton,
                        ]}
                        onPress={() => setSelectedFilter(filter)}
                    >
                        <Text
                            style={[
                                styles.filterText,
                                selectedFilter === filter && styles.selectedFilterText,
                            ]}
                        >
                            {filter === 'All' ? 'All' : `★ ${filter}`}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {filteredReviews.length === 0 ? (
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <Text style={styles.noReviewText}>No reviews found</Text>

                </View>
            ) : (
                <FlatList
                    data={filteredReviews}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.reviewCard}>
                            <View style={styles.userInfo}>
                                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                                <View style={styles.userDetail}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                                <Icon name="star" size={16} color="#e6c44f" />
                                <Text style={{ marginLeft: 4 }}>{item.rating}</Text>
                            </View>
                            <Text style={styles.comment}>{item.comment}</Text>
                            {item.image && (
                                <Image source={{ uri: item.image }} style={styles.reviewImage} />
                            )}
                        </View>
                    )}
                />
            )}
        </View>
    );
}

export default ReviewScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fbfcee', padding: 20 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    backButton: {
        backgroundColor: '#f8eba8',
        padding: 14,
        borderRadius: 25,
    },
    editButton: {
        backgroundColor: '#f8eba8',
        padding: 14,
        borderRadius: 25,
    },
    title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
    summary: { alignItems: 'center' },
    averageRating: { fontSize: 40, fontWeight: 'bold', color: '#3971b8', backgroundColor: '#f8eba8', padding: 12, borderRadius: 30 },
    stars: { flexDirection: 'row', marginVertical: 4 },
    reviewCount: { color: 'gray' },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
        gap: 8,
    },
    progressBarBackground: {
        flex: 1,
        height: 6,
        backgroundColor: '#e0ebc9',
        borderRadius: 4,
        marginHorizontal: 8,
    },
    progressBar: {
        height: 6,
        backgroundColor: '#a8b874',
        borderRadius: 4,
    },
    filterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    filterButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#e0ebc9',
        borderRadius: 20,
    },
    filterText: { color: '#333', fontWeight: '500' },
    reviewCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Android shadow
        elevation: 3,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
    },
    avatar: { width: 40, height: 40, borderRadius: 20 },
    userDetail: { flex: 1 },
    name: { fontWeight: 'bold' },
    date: { color: 'gray', fontSize: 12 },
    comment: { fontSize: 14, color: '#333' },
    reviewImage: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        marginTop: 8,
    },
    selectedFilterButton: {
        backgroundColor: '#f8eba8',
        borderRadius: 16,
    },
    selectedFilterText: {
        color: '#3971b8',
        fontWeight: 'bold',
    },
    noReviewText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#999',
    }

});