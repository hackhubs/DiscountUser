import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import FormButton from '../../components/FormButton';
import {List, Paragraph} from 'react-native-paper';

function AnnualSubscription(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/subscribed_card.png')}
        style={{
          width: '100%',
          height: '92%',
          maxHeight: '38%',
        }}>
        <Image source={require('../../assets/subs.png')} />
      </ImageBackground>
      <View flexDirection="row" style={styles.amount}>
        <Text style={styles.text}>{'\u20B9'} 6000</Text>
        <Text>/Annual</Text>
      </View>
      <View style={{padding: 15}}>
        <List.Section>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            In addition to all the features in Half Yearly, Annual also
            includes:
          </Text>
          <List.Item
            title="Access on all types of shops"
            left={props => (
              <Image
                {...props}
                source={require('../../assets/checked.png')}
                style={{width: 25, height: 25}}
              />
            )}
          />
          <List.Item
            title="Special Discounts on shop above worth  rupee 5000"
            titleNumberOfLines={2}
            left={props => (
              <Image
                {...props}
                source={require('../../assets/checked.png')}
                style={{width: 25, height: 25}}
              />
            )}
          />
          <List.Item
            title="50% off on 1st shop using the card"
            left={props => (
              <Image
                {...props}
                source={require('../../assets/checked.png')}
                style={{width: 25, height: 25}}
              />
            )}
          />
        </List.Section>
        <FormButton buttonTitle="Subscribe" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  amount: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 28,
  },
});

export default AnnualSubscription;
