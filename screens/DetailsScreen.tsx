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
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Loading: undefined;
    Login: undefined;
    Main: undefined;
    Review: undefined;
};

type ReviewScreenNavigationProp = StackNavigationProp<RootStackParamList, "Review">;

const DetailsScreen: React.FC = () => {
    const navigation = useNavigation<ReviewScreenNavigationProp>();
    const [bookmarked, setBookmarked] = useState(false);

    const toggleBookmark = () => {
        setBookmarked(prev => !prev);
    };
    return (
        <SafeAreaView style={styles.container}>
            {/* Image Section */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/loading.png')}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={14} color="#f8eba8" />
                </TouchableOpacity>
            </View>

            {/* Card Content Section */}
            <View style={styles.card}>
                <TouchableOpacity style={styles.saveButton} onPress={toggleBookmark}>
                    <Icon
                        name={bookmarked ? 'bookmark' : 'bookmark-o'}
                        size={24}
                        color="#f8eba8"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Santorini Island</Text>
                <View style={styles.infoRow}>
                    <Icon name="map-marker" size={16} color="#777" />
                    <Text style={styles.address}>Santorini, Greece</Text>
                </View>

                <View style={styles.infoRow}>
                    <Icon name="car" size={12} color="#777" />
                    <Text style={styles.infoText}>20 min</Text>
                </View>

                <View style={styles.infoRow}>
                    <Icon name="clock-o" size={16} color="#777" />
                    <Text style={styles.infoText}>Open: 9:00 AM - 8:00 PM</Text>
                </View>


                <View style={styles.ratingRow}>
                    <Icon name="star" size={16} color="#e6c44f" />
                    <Icon name="star" size={16} color="#e6c44f" />
                    <Icon name="star" size={16} color="#e6c44f" />
                    <Icon name="star" size={16} color="#e6c44f" />
                    <Icon name="star" size={16} color="#e6c44f" />
                    <Text style={styles.ratingText}>5.0</Text>
                </View>

                <View style={styles.callShareRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Icon name="phone" size={16} color="#a8b874" />
                        <Text style={styles.actionText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Icon name="share-alt" size={16} color="#a8b874" />
                        <Text style={styles.actionText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Icon name="pencil" size={16} color="#a8b874" />
                        <Text style={styles.actionText}>Feedback</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut at vitae, lacus,
                    sit imperdiet risus. Sit pulvinar dignissim egestas iaculis commodo sollicitudin vitae at tellus.
                </Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={styles.reviewButton}
                        onPress={() => navigation.replace('Review')}
                    >
                        <Text style={styles.reviewText}>Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.locationButton}>
                        <Text style={styles.locationText}>Get Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    card: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fbfcee',
        padding: 26,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
    },
    iconShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 4, // Android shadow
        marginRight: 2,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 14,
        borderRadius: 25,
    },
    saveButton: {
        position: 'absolute',
        top: -20,
        right: 30,
        backgroundColor: '#316fb6',
        padding: 14,
        borderRadius: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3971b8'
    },
    price: {
        fontSize: 18,
        color: '#007bff',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    infoText: {
        marginLeft: 6,
        color: '#444',
        fontSize: 14,
    },
    address: {
        marginLeft: 6,
        color: '#555',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingText: {
        marginLeft: 8,
        fontWeight: 'bold',
        color: '#333',
        fontSize: 14,
    },
    callShareRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },

    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbfcee',
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#a8b874',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    },

    actionText: {
        color: '#a8b874',
        fontWeight: 'bold',
        marginLeft: 6,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 6,
    },
    description: {
        color: '#555',
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    reviewButton: {
        flex: 3,
        backgroundColor: '#a8b874',
        padding: 12,
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
    },
    reviewText: {
        fontWeight: 'bold',
        color: '#fbfcee',
    },
    locationButton: {
        flex: 7,
        backgroundColor: '#3971b8',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    locationText: {
        fontWeight: 'bold',
        color: '#fbfcee',
    },
});


export default DetailsScreen;
