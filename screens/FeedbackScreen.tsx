import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeedBackScreen = ({ navigation }: any) => {
    const [rating, setRating] = useState(4);
    const [comment, setComment] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    const handlePickImage = async () => {
        Alert.alert(
            'Upload Image',
            'Choose a method',
            [
                {
                    text: 'Take Photo',
                    onPress: async () => {
                        const { status } = await ImagePicker.requestCameraPermissionsAsync();
                        if (status !== 'granted') {
                            Alert.alert('Permission Denied', 'Camera access is required');
                            return;
                        }

                        const result = await ImagePicker.launchCameraAsync({
                            allowsEditing: true,
                            quality: 1,
                        });

                        if (!result.canceled) {
                            setImageUri(result.assets[0].uri);
                        }
                    },
                },
                {
                    text: 'Choose from Library',
                    onPress: async () => {
                        const result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.All,
                            allowsEditing: true,
                            quality: 1,
                        });

                        if (!result.canceled) {
                            setImageUri(result.assets[0].uri);
                        }
                    },
                },
                { text: 'Cancel', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    const handleSubmit = () => {
        Alert.alert('Submitted!', 'Your feedback has been sent.');
        setRating(0);
        setComment('');
        setImageUri(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Review')}>
                    <Icon name="arrow-left" size={16} color="#a8b874" />
                </TouchableOpacity>
                <Text style={styles.title}>Write a review for</Text>
            </View>

            <Image source={require('../assets/loading.png')} style={styles.image} />
            <Text style={styles.name}>Artis Coffee Thu Duc</Text>

            <View style={styles.starContainer}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <TouchableOpacity key={i} onPress={() => setRating(i)}>
                        <FontAwesome
                            name="star"
                            size={30}
                            color={i <= rating ? '#e6c44f' : '#f6e6a5'}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                style={styles.textInput}
                placeholder="What did you like or dislike?"
                multiline
                value={comment}
                onChangeText={setComment}
            />

            <TouchableOpacity style={styles.uploadBox} onPress={handlePickImage}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
                ) : (
                    <>
                        <FontAwesome name="camera" size={24} color="#3971b8" />
                        <Text style={styles.uploadText}>Add a photo or video</Text>
                    </>
                )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FeedBackScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fbfcee' },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    backButton: {
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8eba8',
        padding: 14,
        borderRadius: 25,
    },
    title: {
        fontSize: 17,
        lineHeight: 20,
        includeFontPadding: false,
        textAlignVertical: 'center',
        color: '#343b1b',
    },
    image: { width: 140, height: 140, borderRadius: 8, alignSelf: 'center' },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
        color: '#3971b8',
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        height: 100,
        padding: 12,
        textAlignVertical: 'top',
        marginTop: 12,
        marginBottom: 16,
    },
    uploadBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#aaa',
        borderRadius: 8,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    uploadText: {
        marginTop: 6,
        color: '#3971b8',
        fontWeight: '500',
    },
    uploadedImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        resizeMode: 'contain',
    },
    submitButton: {
        backgroundColor: '#3971b8',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    submitText: { color: '#fbfcee', fontSize: 16, fontWeight: '600' },
});