
// screens/Screen1.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Screen 3</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen3;
