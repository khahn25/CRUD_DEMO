
// screens/Screen1.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
    const data = { name: "Nguyễn Văn Test", className: "65CS3" }
  return (
    <View>
      <Text>This is Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2', { userData: data })}
      />
      
    </View>
  );
};

export default Screen1;
