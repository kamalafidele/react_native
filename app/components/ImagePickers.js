import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./ImageInput";
import ImageInputLists from "./ImageInputLists";

function ImagePickers(props) {
  const [imgSource, setImgSource] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);


  const handleAdd = (uri) => {
    setImageUrls([...imageUrls, uri]);
  }

  const handleRemove = (uri) => {
    setImageUrls(imageUrls.filter(imgUri => imgUri != uri));
  }

  return (
    <View style={styles.container}>
      <ImageInput imageUri={imgSource} onChangeImage={uri => setImgSource(uri)}/>

      <ImageInputLists imageUrls={imageUrls} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {},
});
export default ImagePickers;
