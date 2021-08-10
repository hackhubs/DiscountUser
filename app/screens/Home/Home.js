import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import Discount from '../../utils/Discount';
import ImageCarousel from '../../utils/ImageCarousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home(props) {
  return (
    <>
      <View style={styles.header}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt}>Amount Spent</Text>
          <Text style={styles.txt}>{'\u20B9'} 10,000</Text>
        </View>
        <View style={styles.verticleLine}></View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt}>Amount Saved</Text>
          <Text style={styles.txt}>{'\u20B9'} 2,000</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageCarousel />
        <View style={styles.category}>
          {/* row 1 subcategory */}
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/DairyProduct.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.subtxt}>Essentials</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/doctor.png')}
                style={{width: 38, height: 42}}
              />
              <Text style={styles.subtxt}>Doctors</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/food.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.subtxt}>Restaurants</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/shopping.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.subtxt}>Shopping</Text>
            </TouchableOpacity>
          </View>
          {/* row 2 subcategory */}
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginVertical: 5,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/hospital.png')}
                style={{width: 38, height: 42}}
              />
              <Text style={styles.subtxt}>Hospitals</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/education.png')}
                style={{width: 48, height: 36}}
              />
              <Text style={styles.subtxt}>Education</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/globe.png')}
                style={{width: 40, height: 42}}
              />
              <Text style={styles.subtxt}>Travel</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/pills.png')}
                style={{width: 38, height: 43}}
              />
              <Text style={styles.subtxt}>Medical</Text>
            </TouchableOpacity>
          </View>
          {/* row 3 subcategory*/}
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/wedding.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.subtxt}>Wedding{'\n'}Requisites</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/beauty.png')}
                style={{width: 40, height: 38}}
              />
              <Text style={styles.subtxt}>Saloon</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/repair.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.subtxt}>Repair &{'\n'}Services</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.subcategory}>
              <Image
                source={require('../../assets/more.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.subtxt}>Show More</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* top categories */}
        <Discount />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#D02824',
    height: windowHeight / 12,
    width: windowWidth,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  verticleLine: {
    height: windowHeight / 10,
    width: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  txt: {
    color: '#fff',
    fontSize: 16,
  },
  category: {
    width: windowWidth,
    height: windowHeight / 2.5,
    backgroundColor: '#fff',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  subcategory: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  subtxt: {
    color: '#293645',
  },
});

export default Home;
