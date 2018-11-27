import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { WebBrowser } from "expo";
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { MonoText } from "../components/StyledText";
import LinksScreen from '../screens/LinksScreen';

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

           <View style={styles.welcomeContainer}>
            <Image
              source={
                require("../assets/images/clouds.png")
              }
            />

            <Button style={styles.tapIn}   onPress={() => {
              navigate("Links");
          } } title="Tap In">

          </Button>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  tapIn: {
    width: 100,
    height: 80,
  },
});
