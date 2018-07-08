import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default ({index, content, style}) => (
  <View style={style}>
    <Text style={indexStyle.container}>{`# ${index + 1}`}</Text>
    <ScrollView>
      <Text style={contentStyle.container}>{content}</Text>
    </ScrollView>
  </View>
)

const indexStyle = StyleSheet.create({
  container: {
    marginBottom: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});


const contentStyle = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Quicksand'
  }
});