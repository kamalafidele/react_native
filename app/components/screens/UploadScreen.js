import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../../config/colors';

function UploadScreen({ progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <Progress.Bar progress={progress} color={colors.PRIMARY}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})
export default UploadScreen;