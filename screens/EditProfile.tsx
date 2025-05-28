import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
    Button,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }: any) => {
    const [avatar, setAvatar] = useState<string>('https://i.pinimg.com/736x/46/fb/04/46fb0420c8cdccd35f50b6395b5a76f2.jpg');
    const [profile, setProfile] = useState({
        username: 'Amanda Jane',
        email: 'amanda@gmail.com',
        phone: '+ 65 2311 333',
        dob: '20/05/1990',
        address: '123 Royal Street, New York',
    });
    const [originalProfile, setOriginalProfile] = useState({ ...profile });
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        checkIfChanged();
    }, [profile]);

    const checkIfChanged = () => {
        setHasChanges(JSON.stringify(profile) !== JSON.stringify(originalProfile));
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access media library is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
        });

        if (!result.canceled && result.assets.length > 0) {
            setAvatar(result.assets[0].uri);
        }
    };

    const handleSave = () => {
        setOriginalProfile({ ...profile });
        setHasChanges(false);
        alert('Profile updated!');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.contentContainer}>

                    <View style={styles.backgroundImage}>
                        <Image
                            source={{ uri: avatar }}
                            style={styles.backgroundAvatar}
                            blurRadius={10}
                        />
                    </View>
                    <View style={{ width: '100%', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Main', { screen: 'Profile' })}>
                            <Icon name="chevron-left" size={16} color="#3971b8" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: avatar }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
                            <Icon name="camera" size={18} color="#fbfcee" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoContainer}>
                        <ProfileInput
                            label="Username"
                            value={profile.username}
                            onChange={(text) => setProfile({ ...profile, username: text })}
                        />
                        <ProfileInput
                            label="Email"
                            value={profile.email}
                            onChange={(text) => setProfile({ ...profile, email: text })}
                        />
                        <ProfileInput
                            label="Phone"
                            value={profile.phone}
                            onChange={(text) => setProfile({ ...profile, phone: text })}
                        />
                        <ProfileInput
                            label="Date of birth"
                            value={profile.dob}
                            onChange={(text) => setProfile({ ...profile, dob: text })}
                        />
                        <ProfileInput
                            label="Address"
                            value={profile.address}
                            onChange={(text) => setProfile({ ...profile, address: text })}
                        />
                    </View>

                    {hasChanges && (
                        <View style={styles.fullButtonContainer}>
                            <TouchableOpacity onPress={handleSave} style={styles.fullButton}>
                                <Text style={styles.fullButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>

                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const ProfileInput = ({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (text: string) => void;
}) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={label}
            placeholderTextColor="#aaa"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfcee',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 20,
        marginBottom: 10,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 240,
        zIndex: -1,
    },
    backgroundAvatar: {
        width: '100%',
        height: '100%',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 20,
        marginTop: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: -5,
        backgroundColor: '#a8b874',
        borderRadius: 20,
        padding: 6,
        borderWidth: 2,
        borderColor: '#fbfcee',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: 'rgba(248, 235, 168,0.9)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: '#a8b874',
        paddingVertical: 12,
    },
    label: {
        color: '#888',
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 6,
    },
    fullButtonContainer: {
        width: '100%',
    },

    fullButton: {
        backgroundColor: '#3971b8',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
    },

    fullButtonText: {
        color: '#fbfcee',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: '#f8eba8',
        padding: 14,
        borderRadius: 25,
    },
});

export default EditProfileScreen;
