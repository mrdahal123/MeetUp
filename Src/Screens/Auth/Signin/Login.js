import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Theme from '../../../ReusableComponents/Theme';
import GlobalButton from '../../../ReusableComponents/GlobalButton';

const Login = () => {
  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState('');

  const eyeOpen = require('../../../Assets/images/eye.png');
  const eyeClose = require('../../../Assets/images/hidden.png');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('.././../../Assets/images/background.png')}
          style={styles.header}>
          <TouchableOpacity style={styles.imgCon}>
            <Image
              source={require('../../../Assets/images/profile2.jpg')}
              style={styles.gif}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.wrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.welcomeTxt}>Welcome !</Text>
            <Text style={styles.subhead}>Signin to continue</Text>
          </View>

          {/* Input */}
          <View
            style={[
              styles.textInput,
              {borderColor: focus == '1' ? Theme.red : Theme.lightGray},
            ]}>
            <Image
              source={require('../../../Assets/images/user.png')}
              style={styles.inputicon}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              spellCheck={true}
              selectionColor={'red'}
              scrollEnabled={true}
              onFocus={() => {
                setFocus(1);
              }}
              onBlur={() => {
                setFocus(1);
              }}
            />
            <Image
              source={require('../../../Assets/images/eye.png')}
              style={styles.eye}
            />
          </View>
          <View
            style={[
              styles.textInput,
              {borderColor: focus == '0' ? Theme.red : Theme.lightGray},
            ]}>
            <Image
              source={require('../../../Assets/images/lock.png')}
              style={styles.inputicon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={show}
              spellCheck={true}
              selectionColor={'red'}
              scrollEnabled={true}
              onFocus={() => {
                setFocus(0);
              }}
              onBlur={() => {
                setFocus(0);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              <Image
                source={show == true ? eyeClose : eyeOpen}
                style={styles.inputicon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.forgot}>Forgot Password</Text>

          <GlobalButton
            type={'full'}
            title={'SIGN IN'}
            inlineStyle={styles.signin}
          />

          <View style={styles.hrContainer}>
            <View style={styles.hr} />
            <Text style={styles.hrText}>Or Login With</Text>
            <View style={styles.hr} />
          </View>

          <View style={styles.socialMediaContainer}>
            <TouchableOpacity style={styles.socialIconCircle}>
              <Image
                source={require('../../../Assets/images/facebook.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconCircle}>
              <Image
                source={require('../../../Assets/images/google.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconCircle}>
              <Image
                source={require('../../../Assets/images/instagram.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIconCircle}>
              <Image
                source={require('../../../Assets/images/github.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
