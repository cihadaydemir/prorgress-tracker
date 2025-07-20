import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ImageGalleryProps {
  images: CameraCapturedPicture[];
  removeImage: (index: number) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, removeImage }) => {
  return (
    <View style={styles.imagesContainer}>
      {images.map((image, index) => (
        <View style={styles.imageContainer} key={image.uri}>
          <Image
            key={index}
            source={{ uri: image.uri }}
            style={styles.image}
          />
          <View style={styles.deleteImageButton}>
            <TouchableOpacity onPress={() => removeImage(index)}>
              <Ionicons name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 120,
    left: 16,
    zIndex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  deleteImageButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  image: {
    width: 60,
    height: 60,
    margin: 8,
  },
});
