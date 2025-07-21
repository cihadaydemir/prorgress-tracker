import { CameraCapturedPicture } from 'expo-camera';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CaptureButtonProps {
  handleCapture: () => void;
  handleDoneBtn: () => void;
  images: CameraCapturedPicture[];
}

export const CaptureButton: React.FC<CaptureButtonProps> = ({ handleCapture, handleDoneBtn, images }) => {
  return (
    <View style={styles.captureButtonContainer}>
      <TouchableOpacity onPress={handleCapture}>
        <View style={styles.captureButton} />
      </TouchableOpacity>
      {images.length > 0 && (
        <TouchableOpacity onPress={handleDoneBtn} style={styles.doneButton}>
          <Text>Done</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  captureButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 2,
    borderColor: 'white',
  },
  doneButton: {
    position: 'absolute',
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});
