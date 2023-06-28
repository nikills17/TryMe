import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';


const ProductDetail = ({ navigation }) => {

  const images = [
    require('../assets/productDetailImage.png'),
    require('../assets/productDetailImage.png'),
  ];

  const uiData = [
    {
      id: 1,
      title: 'NYKAA',
      description: 'Bath & Body Works Pineapple Coconut...',
      image: require('../assets/product.png'),
    },
    {
      id: 2,
      title: 'NYKAA',
      description: 'Bath & Body Works Pineapple Coconut...',
      image: require('../assets/product.png'),
    },
    {
      id: 3,
      title: 'NYKAA',
      description: 'Bath & Body Works Pineapple Coconut...',
      image: require('../assets/product.png'),
    },
  ];


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, alignItems: 'center', backgroundColor: '#fff' }}>
        <TouchableOpacity activeOpacity={0.95} onPress={() => navigation.goBack()}>
          <AntDesign
            name={'left'}
            size={25}
            color={'#000'}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.95} style={{ marginRight: 15 }}>
            <AntDesign
              name={'sharealt'}
              size={22}
              color={'#000'}
            />
          </TouchableOpacity>
          <Image source={require('../assets/heart.png')}
            style={{
              height: 38,
              width: 38,
              resizeMode: 'contain',
            }} />
        </View>

      </View>
      <ScrollView contentContainerStyle={{paddingBottom:50}}>
        <View style={styles.container}>
          <Swiper
            loop={false}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            paginationStyle={styles.pagination}
          >
            {images.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={image} style={styles.image} resizeMode="contain" />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={{ flexDirection: 'column', marginTop: 20, marginHorizontal: 25 }}>
          <Text style={{ color: '#7b7b7b', fontSize: 14, fontWeight: '600' }}>M.a.C. Cosmetics</Text>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '500', marginTop: 10 }}>M.A.C. Cosmetics Professional Makeup</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 25, marginHorizontal: 25, justifyContent: 'flex-start' }}>
          <TouchableOpacity
            activeOpacity={0.95}
            style={{ paddingVertical: 10, paddingHorizontal: 35, borderWidth: 1, borderRadius: 25, backgroundColor: 'transparent', borderColor: '#000' }}>
            <Text style={{ fontSize: 15, color: '#000', }}>view brand</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.95}
            style={{ paddingVertical: 10, paddingHorizontal: 45, borderWidth: 1, borderRadius: 25, backgroundColor: '#000', borderColor: '#000', marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, color: '#fff', }}>add to kit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', marginTop: 20, marginHorizontal: 25 }}>
          <Text style={{ color: '#000', fontSize: 24, fontWeight: '600', lineHeight: 28 }}>Key Benefits</Text>
        </View>

        <View style={{ borderWidth: 1, marginHorizontal: 25, marginTop: 20, borderRadius: 10, padding: 20 }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ borderWidth: 1, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderColor: '#888' }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: '800' }}>17</Text>
            </View>

            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ fontWeight: '800', fontSize: 15, color: '#000' }}>users 3 this </Text>
              <Text style={{ fontWeight: '400', fontSize: 14, color: '#000' }}>and we think you will too</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View style={{ borderWidth: 1, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderColor: '#888' }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: '800' }}>8</Text>
            </View>

            <View style={{ flexDirection: 'column', marginLeft: 15, }}>
              <Text style={{ fontWeight: '800', fontSize: 15, color: '#000' }}>experts recommend this</Text>
              <Text style={{ fontWeight: '400', fontSize: 14, color: '#000' }}>for your face profile</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View style={{ borderWidth: 1, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderColor: '#888' }}>
              <Image source={require('../assets/waterProof.png')} style={{ height: 20, width: 23, resizeMode: 'contain', tintColor: 'black' }} />
            </View>

            <View style={{ flexDirection: 'column', marginLeft: 15, }}>
              <Text style={{ fontWeight: '800', fontSize: 15, color: '#000' }}>experts recommend this</Text>
              <Text style={{ fontWeight: '400', fontSize: 14, color: '#000' }}>for your face profile</Text>
            </View>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View style={{ borderWidth: 1, height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderColor: '#888' }}>
              <Image source={require('../assets/moistruing.png')} style={{ height: 20, width: 23, resizeMode: 'contain', tintColor: 'black' }} />
            </View>

            <View style={{ flexDirection: 'column', marginLeft: 15, }}>
              <Text style={{ fontWeight: '800', fontSize: 15, color: '#000' }}>experts recommend this</Text>
              <Text style={{ fontWeight: '400', fontSize: 14, color: '#000' }}>for your face profile</Text>
            </View>
          </View>

          <View style={{ marginTop: 15, flex: 1 }}>
            <Text style={{ fontWeight: '400', fontSize: 13, textAlign: 'left', color: '#000' }}>product recommendations are based on your skin profile.  to know more about my process, data privacy and other things read our terms & conditions. to know  why this specific product is a match, tap below. </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column', marginTop: 20, marginHorizontal: 25 }}>
          <Text style={{ color: '#000', fontSize: 24, fontWeight: '600', lineHeight: 28 }}>expert reviews</Text>
        </View>

        <View style={{ marginTop: 25, marginLeft: 20, justifyContent: 'space-between' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require('../assets/expertViews.png')} style={{ height: 250, width: 150, resizeMode: 'contain' }} />
            <Image source={require('../assets/expertViews.png')} style={{ height: 250, width: 150, resizeMode: 'contain', marginHorizontal: 15 }} />
            <Image source={require('../assets/expertViews.png')} style={{ height: 250, width: 150, resizeMode: 'contain' }} />

          </ScrollView>
        </View>


        <View style={{ borderWidth: 1, padding: 20, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', marginHorizontal: 25, borderRadius: 10, marginTop: 35 }}>
          <Image source={require('../assets/stars.png')} style={{ width: 250, height: 40, resizeMode: 'contain' }} />
          <TouchableOpacity
            activeOpacity={0.95}
            style={{ paddingVertical: 20, paddingHorizontal: 55, borderWidth: 1, borderRadius: 40, backgroundColor: '#000', borderColor: '#000', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 20, color: '#fff', }}>rate this product</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'column', marginTop: 35, marginHorizontal: 25 }}>
          <Text style={{ color: '#000', fontSize: 24, fontWeight: '600', lineHeight: 28 }}>you may also like</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {uiData.map((item) => (
            <View
              key={item.id}
              style={{
                borderWidth: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 25,
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
                width: 260
              }}
            >
              <View style={{ flexDirection: 'column', flex: 2 }}>
                <Text style={{ fontWeight: '700', color: '#000', fontSize: 13 }}>{item.title}</Text>
                <Text style={{ fontWeight: '400', fontSize: 13, width: 120, marginTop: 5 }}>{item.description}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity activeOpacity={0.95} style={styles.viewButton} onPress={() => navigation.navigate('productDetail')}>
                    <Text style={styles.viewButtonText}>View</Text>
                  </TouchableOpacity>
                  <Image source={require('../assets/heart.png')} style={styles.icon} />
                </View>
              </View>

              <View style={{ borderWidth: 1, padding: 8, alignItems: 'center', borderRadius: 10, marginRight: 10 }}>
                <Image source={item.image} style={{ height: 65, width: 65, resizeMode: 'contain' }} />
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 450,
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    bottom: -10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  viewButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'transparent',
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 15,
    color: '#000',
  },
  icon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    marginLeft: 10
  },
});
export default ProductDetail