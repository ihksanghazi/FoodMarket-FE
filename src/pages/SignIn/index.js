import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Header, TextInput, Button, Gap} from '../../components';
import {signInAction} from '../../redux/action';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#E5E5E5'},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
