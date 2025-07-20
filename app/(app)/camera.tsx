import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CameraCapturedPicture, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function CameraScreen(){
  const [facing, setFacing] = useState<CameraType>('back');
  const [images, setImages] = useState<CameraCapturedPicture[]>([]);
  const cameraRef = useRef<CameraView>(null);
  
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission()  
    }
  }, [permission?.status]);

   function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleCapture = async () => {
    const photo = await cameraRef?.current?.takePictureAsync();
    if (!photo) return;
    setImages(prev => [...prev, photo]);
  };

  const handleOnBack = () => {
    router.back();
    setImages([]);
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} >
        <View style={styles.closeButton}>
          <TouchableOpacity
              onPress={handleOnBack}
          
          >
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
          <View style={styles.actionButtons}>
          <TouchableOpacity  onPress={toggleCameraFacing}>
  <MaterialIcons name="flip-camera-ios" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.imagesContainer}>
          {
            images.map((image, index) => (
              <View style={styles.imageContainer}>
                <Image
                  key={index}
                  source={{ uri: image.uri }}
                  style={styles.image}
                />
                <View style={styles.deleteImageButton}>
                  <TouchableOpacity onPress={() => setImages(prev => prev.filter((_, i) => i !== index))}> 
                    <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
            ))
          }
        </View>
        <View style={styles.captureButtonContainer}>
          <TouchableOpacity onPress={handleCapture}>
            <View style={styles.captureButton} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  actionButtons: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    top:16,
    right: 16,
    zIndex:1
  },
  closeButton:{
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 2,
    borderColor: 'white',
  },
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 120,
    left: 16,
    zIndex: 1,
  },
  imageContainer:{
    flexDirection: 'row',
  },
  deleteImageButton:{
    position:"absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    backgroundColor:"white",
    borderRadius:100,

  },
  image: {
    width: 60,
    height: 60,
    margin: 8,
  }
});

