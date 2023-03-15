import React from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import { typography } from '../CommonStyle/typography';
import { spacing } from '../CommonStyle/spacing';
import Text from '../components/Text';
// import {Text} from '../components/text/Text'

export default function Signin() {
  return (
    <SafeAreaView>
      <Text>Sign in section</Text>
      <View>
        <Image source={require("../../assets/loginImg.webp")} style={{width: 300, height: 300, alignSelf:'center'}}/>
      </View>
      <View>
        <Text preset='bold'>Login Here</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
