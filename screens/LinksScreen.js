import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ScrollView, TouchableOpacity, Text  } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContiner}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>single player</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>multi player</Text>
          </View>
        </TouchableOpacity>
       
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    marginBottom: 30,
    width: 200,
    height: 80,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    paddingBottom: 10,
  }
});
