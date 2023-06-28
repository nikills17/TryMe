import React, { useState } from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Product from '../components/product';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation }) => {

  const [active, setActive] = useState(1);

  const data = [
    {
      id: '0',
      name: 'nykaa',
      description: 'nyx professional makeup',
      source: require('../assets/product.png'),
      matchSource: require('../assets/good.png')
    },
    {
      id: '1',
      name: 'nykaa',
      description: 'nyx professional makeup',
      source: require('../assets/product.png'),
      matchSource: require('../assets/average.png')
    },
    {
      id: '2',
      name: 'nykaa',
      description: 'nyx professional makeup',
      source: require('../assets/product.png'),
      matchSource: require('../assets/poor.png')
    },
    {
      id: '3',
      name: 'nykaa',
      description: 'nyx professional makeup',
      source: require('../assets/product.png'),
      matchSource: require('../assets/super.png')
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <LinearGradient colors={['#fcf8f8', '#fcefed', '#fff']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
        <ScrollView>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#000', fontSize: 14, fontWeight: '600' }}>Hii Nikhil !</Text>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', marginTop: 5 }}>beauty start here</Text>
            </View>
            <Feather
              name={'menu'}
              size={25}
              color={'#000'}
            />
          </View>


          <View style={{ flexDirection: 'row', marginTop: 25, marginHorizontal: 15 }}>
            <TouchableOpacity
              onPress={() => setActive(1)}
              activeOpacity={0.95}
              style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, borderWidth: 1, borderRadius: 25, backgroundColor: active === 1 ? '#f3faab' : 'transparent', borderColor: '#000' }}>
              <Image source={require('../assets/makeUp.png')}
                style={{ height: 22, width: 22, resizeMode: 'contain' }}
              />
              <Text style={{ fontSize: 15, color: '#000', paddingLeft: 10 }}>makeup</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActive(2)}
              activeOpacity={0.95}
              style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, borderWidth: 1, borderRadius: 25, backgroundColor: active === 2 ? '#f3faab' : 'transparent', borderColor: '#000', marginLeft: 15 }}>
              <Image source={require('../assets/skinCare.png')}
                style={{ height: 22, width: 22, resizeMode: 'contain' }}
              />
              <Text style={{ fontSize: 15, color: '#000', paddingLeft: 10 }}>skincare</Text>
            </TouchableOpacity>
          </View>



          <View style={{ flexDirection: 'column', marginHorizontal: 15, marginTop: 25 }}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}>Weekly Top 4</Text>
            <Text style={{ color: '#000', fontSize: 14, fontWeight: '600', marginTop: 5 }}>perfect-for-you based on your goals!</Text>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 15 }}>
            {data.map((item) => (
              <Product key={item.id} item={item} navigation={navigation} />
            ))}
          </View>




          <View style={{ marginVertical: 25, marginHorizontal: 15, borderWidth: 1, borderColor: '#000', padding: 15, borderRadius: 10,backgroundColor:'#FFF' }}>
            <Text style={{ fontWeight: '500', fontSize: 24, color: "#1E2121", width: '80%', lineHeight: 25 }}>Say goodbye to guesswork</Text>
            <Text style={{ fontWeight: '400', fontSize: 18, color: "#000", width: '75%', lineHeight: 20, marginTop: 15, textAlign: 'auto' }}>Want even more Smudgtastic matches? Tap the button below to discover!</Text>

            <TouchableOpacity
              activeOpacity={0.95}
              style={{ paddingVertical: 15, borderWidth: 1, borderRadius: 25, backgroundColor: '#000', borderColor: '#000', alignSelf: 'flex-start', marginTop: 25 }}>
              <Text style={{ fontSize: 18, color: '#fff', paddingHorizontal: 50, }}>Discover</Text>
            </TouchableOpacity>
            <Image source={require('../assets/star.png')} style={{ height: 116, width: 116, resizeMode: 'contain', position: 'absolute', alignSelf: 'flex-end', paddingRight: 15, top: 100 }} />
          </View>






          {/* ------------------------------------ */}
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

export default Home