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
import ModeScreen from '../screens/ChooseModeScreen';

const LinksStack = createStackNavigator({
  Links: ModeScreen,
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

           <TouchableOpacity style={styles.welcomeContainer} onPress={() => {
              navigate("Links");
            }}>
            <Image style={{height: 850, width: 430}}
              source={
                require("../assets/images/clouds.png")
              }
            />

            </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
  },
  welcomeImage: {
    flex: 1,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
});
