import React, { useState } from 'react';
import { View, Text, Image, Alert, PermissionsAndroid, Linking } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AccountCard from '../UserAccount/components/AccountCard';
import { styles } from '../UserAccount/styles';
import { CLAUSES, LABELS } from '../../styles/constant';
import Profileicon from '../../assets/svgs/ProfileIcon';
import PasswordLock from '../../assets/svgs/PasswordLock';
import Logout from '../../assets/svgs/Logout';
import Edit from '../../assets/svgs/Edit';
import { colors } from '../../styles/colors';

const requestPermissions = async () => {
  try {
    const cameraPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    const readPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    const writePermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );

    if (
      cameraPermission === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ||
      readPermission === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ||
      writePermission === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
    ) {
      Alert.alert(
        "Permissions Required",
        "You have permanently denied some permissions. Please enable them manually in the app settings.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Open Settings",
            onPress: () => {
              Linking.openSettings(); 
            },
          },
        ]
      );
      return false;
    }

    return (
      cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
      readPermission === PermissionsAndroid.RESULTS.GRANTED &&
      writePermission === PermissionsAndroid.RESULTS.GRANTED
    );
  } catch (err) {
    console.error("Permission request error:", err);
    Alert.alert("Error", "An error occurred while requesting permissions.");
    return false;
  }
};

const UserAccount = () => {
  const [profileImageUri, setProfileImageUri] = useState<string | null>(
    'https://via.placeholder.com/150/000000/FFFFFF?text=Profile'
  );

  const handleImagePick = (isCamera: boolean) => {
    requestPermissions().then((granted) => {
      if (granted) {
        const options = isCamera
          ? { mediaType: 'photo', saveToPhotos: true }
          : { mediaType: 'photo' };

        const callback = (response: any) => {
          if (response.didCancel) {
            Alert.alert("Action Cancelled", "You cancelled the image picker.");
          } else if (response.errorCode) {
            Alert.alert("Error", response.errorMessage || "An unknown error occurred.");
          } else if (response.assets && response.assets.length > 0) {
            setProfileImageUri(response.assets[0].uri);
          } else {
            Alert.alert("Error", "No image was selected.");
          }
        };

        if (isCamera) {
          launchCamera(options, callback);
        } else {
          launchImageLibrary(options, callback);
        }
      } else {
        Alert.alert("Permissions Required", "Camera and storage permissions are required.");
      }
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.profileImageWrapper}
        onTouchEnd={() => {
          Alert.alert('Change Profile Picture', 'Choose an option', [
            {
              text: 'Camera',
              onPress: () => handleImagePick(true),
            },
            {
              text: 'Gallery',
              onPress: () => handleImagePick(false),
            },
            { text: 'Cancel', style: 'cancel' },
          ]);
        }}
      >
        <Image
          source={{ uri: profileImageUri }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>{LABELS.PARHELION}</Text>
      <Text style={styles.EmailText}>{LABELS.PARHELION_Email}</Text>
      <View style={{ marginTop: 15 }}>
        <AccountCard icon={<Edit />} title={CLAUSES.EDIT_DETAILS} onPress={() => { }} />
        <AccountCard icon={<Profileicon />} title={CLAUSES.PROFILE_SUBMITTED} onPress={() => { }} />
        <AccountCard icon={<PasswordLock />} title={LABELS.CHANGE_PASSWORD} onPress={() => { }} />
        <AccountCard icon={<Logout />} title={LABELS.LOGOUT} onPress={() => { }} style={{ color: colors.RED }} />
      </View>
    </View>
  );
};

export default UserAccount;
