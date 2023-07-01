import React, { useState } from 'react';
import Screen from './Screen';
import { Alert, View } from 'react-native';
import listingsApi from '../../api/listings';
import UploadScreen from './UploadScreen';

function SimulateUploadProgressScreen(props) {
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing) => {
        setProgress(0);
        setUploadVisible(true);
         
        const result = await listingsApi.addListing(listing, (progress) => {
            setProgress(progress);
        });

        setUploadVisible(false);

        if (!result.ok) Alert.alert('Error', 'Uploading the image has failed');
        Alert.alert('Success', 'Image Uploaded successfully');
    }

    return (
        <Screen>
            <View>
                <UploadScreen progress={progress} visible={uploadVisible}/>
            </View>
        </Screen>
    );
}

export default SimulateUploadProgressScreen;