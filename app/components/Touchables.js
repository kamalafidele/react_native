import { View, TouchableNativeFeedback, TouchableOpacity, Image } from "react-native";

const Touchables = () => {
  return (
    <View>
      <TouchableNativeFeedback onPress={() => console.log("image clicked")}>
        <View
          style = {{ backgroundColor: "dodgerblue", width: 200, height: 70 }}
        ></View>
      </TouchableNativeFeedback>
      <TouchableOpacity>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Touchables;