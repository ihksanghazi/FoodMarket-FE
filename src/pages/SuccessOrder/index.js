import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Text style={styles.subtitle}>Just stay at home while we are</Text>
      <Text style={styles.subtitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
      <View style={styles.buttonContainer}>
        <Button
          color="#8D92A3"
          textColor="#F9FAFF"
          text="View My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
