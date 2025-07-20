import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function CameraScreen(){
  const [facing, setFacing] = useState<CameraType>('back');
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

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.closeButton}>
          <TouchableOpacity
              onPress={() => router.back()}
          
          >
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
          <View style={styles.actionButtons}>
          <TouchableOpacity  onPress={toggleCameraFacing}>
  <MaterialIcons name="flip-camera-ios" size={24} color="white" />
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
});

