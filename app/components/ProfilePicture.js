import { View, Image, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

function ProfilePicture(props) {
  return (
    <View style={props.style}>
      <Image source={props.image} style={[styles.image, props.style]}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    borderWidth: 3,
    borderColor: defaultStyles.colors.primary,
  },
});

export default ProfilePicture;
