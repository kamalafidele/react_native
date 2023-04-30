import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../config/colors";


const ListItem = ({ title, subtitle, imagePath, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.LIGHT} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image source={imagePath} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  detailsContainer: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
  },
  subtitle: {
    fontSize: 18,
    color: colors.GREY,
  },
});

export default ListItem;
