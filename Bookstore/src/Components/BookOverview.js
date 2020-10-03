import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HEIGHT = 300, WIDTH = 200;
const BookOverview = (props) => {
  const nav=useNavigation()
  return (
    <TouchableOpacity style={styles.Main_View} onPress={()=>{
      nav.navigate('Book Details',{imgsrc:props.imgsrc,title:props.title})
    }}>
      <Image source={props.imgsrc} style={styles.Coverimg}  />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Main_View: {
    width: WIDTH,
    marginTop: 5,
    marginLeft: 5,
    height: HEIGHT,
  },

  Coverimg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
  },
});
export default BookOverview;
