import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const info = [
  {
    img: require('../../assets/avatar.png'),
    name: 'Anaya Patil',
    time: 'a mins ago',
    info: 'Shopped at Harish Grocery Store. Got amazing 50% off on purchase of worth 4000.',
    storename: 'Harish Stores',
    saved: '2000',
    off: '50',
  },
  {
    img: require('../../assets/avatar.png'),
    name: 'Aana Roy',
    time: '10 mins ago',
    info: 'Shopped at Raj Trades. Got amazing 40% off on purchase of worth 3600.',
    storename: 'Raj Trades',
    saved: '1000',
    off: '40',
  },
  {
    img: require('../../assets/avatar.png'),
    name: 'Shruti Patil',
    time: '30 mins ago',
    info: 'Shopped at Harry Sales Grocery Store. Got amazing 50% off on purchase of worth 2940.',
    storename: 'Harish Stores',
    saved: '800',
    off: '45',
  },
  {
    img: require('../../assets/avatar.png'),
    name: 'Samar Patil',
    time: 'a mins ago',
    info: 'Shopped at Harish Grocery Store. Got amazing 50% off on purchase of worth 4000.',
    storename: 'Harish Stores',
    saved: '400',
    off: '20',
  },
  {
    img: require('../../assets/avatar.png'),
    name: 'Anaya Patil',
    time: 'a mins ago',
    info: 'Shopped at Harish Grocery Store. Got amazing 50% off on purchase of worth 4000.',
    storename: 'Harish Stores',
    saved: '2000',
    off: '50',
  },
];

function Socialfeed({navigation}) {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Social Feeds</Text>
        <TouchableOpacity
          onPress={() => console.log('helo')}
          style={styles.filter}>
          <Image
            source={require('../../assets/Filter.png')}
            style={{width: 27, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#2C3A4A', flex: 1}}>
        <FlatList
          data={info}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Card style={styles.cardcontainer}>
              <Card.Title
                title={item.name}
                subtitle={item.time}
                left={props => (
                  <Avatar.Image
                    {...props}
                    size={60}
                    source={item.img}
                    style={{backgroundColor: '#fff'}}
                  />
                )}
                right={props => (
                  <View>
                    <Image
                      {...props}
                      source={require('../../assets/socialdiscount.png')}
                      style={{height: 50, width: 145}}
                    />
                    <View style={{position: 'absolute', left: 40}}>
                      <Text style={{color: '#fff'}}>Saved {item.saved}</Text>
                      <Text>Got {item.off}%</Text>
                    </View>
                  </View>
                )}
              />
              <Card.Content>
                <Paragraph>{item.info}</Paragraph>
              </Card.Content>

              <Card.Content style={{flexDirection: 'row', marginTop: 10}}>
                <Text>Click here to view the shop </Text>
                <Text
                  style={{
                    color: '#266AD1',
                    textDecorationLine: 'underline',
                    marginStart: 20,
                  }}>
                  {item.storename}
                </Text>
              </Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
              </View>
            </Card>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#2C3A4A',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  filter: {
    padding: 10,
    flexDirection: 'row',
  },
  cardcontainer: {
    width: Dimensions.get('window').width * 0.97,
  },
});

export default Socialfeed;
