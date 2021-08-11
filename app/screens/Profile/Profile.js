import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FormButton from '../../components/FormButton';
import FormText from '../../components/FormText';

function Profile({navigation}) {
  return (
    <>
      <View
        style={{
          backgroundColor: '#2C3A4A',
          height: 38,
        }}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{
            padding: 10,
            flexDirection: 'row',
            position: 'absolute',
            right: 10,
          }}>
          <Image source={require('../../assets/editprofile.png')} />
          <Text
            style={{
              color: '#fff',
              marginEnd: 10,
              marginStart: 10,
              fontSize: 16,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View style={styles.imgcontainer}>
            <Image
              style={styles.image}
              source={require('../../assets/abhav.jpg')}
            />

            <Text style={styles.imgtxt}>USER SINCE {'Aug 2021'}</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                <FormText
                  title="First Name"
                  value={'Ananaya'}
                  style={{width: '95%'}}
                />
              </View>
              <View style={{width: '50%'}}>
                <FormText title="Last Name" value={'Roy'} />
              </View>
            </View>

            <FormText value={'Ananya12@gmail.com'} title="Email" />

            <FormText
              title="Address"
              value="B2-11/3, Sector - 3, Thane - 403821 "
            />
            <FormText title="Date of birth" value="8 May 2000" />
            <FormText title="Mobile Number" value="1234567970" />
          </View>
        </View>

        <FormButton buttonTitle="Logout" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2C3A4A',
    alignItems: 'center',
    padding: 15,
  },
  imgcontainer: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  imgtxt: {
    color: '#fff',
    paddingTop: 10,
    fontSize: 16,
  },
  dob: {
    color: '#fff',
    fontSize: 20,
  },
  spinnerTextStyle: {
    color: '#D02824',
  },
});

export default Profile;
