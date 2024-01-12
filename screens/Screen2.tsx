
// screens/Screen1.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
    
  return (
    <View>
      <Text>This is Screen 2 {data.name}</Text>
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
      <Button onPress={() => { navigation.goBack() }} title='Quay lại màn trước' />
    </View>
  );
};

export default Screen2;
