import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputLists({imageUrls = [], onRemoveImage, onAddImage }) {
    return (
        <View style={styles.container}>
            {imageUrls.map((uri) => (
                <ImageInput imageUri={uri} key={uri} onChangeImage={() => onRemoveImage(uri)}/>
            ))}

            <ImageInput onChangeImage={uri =>onAddImage(uri)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

export default ImageInputLists;