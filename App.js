import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import loginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import CategoryScreen from './src/screens/category';
import ProfileScreen from './src/screens/profile';
import ProductDetailScreen from './src/screens/productDetail';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Tab.Screen
        name="homes"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ position: 'relative' }}>
                <Foundation
                  name={'home'}
                  size={25}
                  color={focused ? '#000' : '#858b9b'}
                />
                {focused && (
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: 6,
                      width: 6,
                      borderRadius: 20,
                      position: 'absolute',
                      left: '5%',
                      bottom: -10
                    }}
                  />
                )}
              </View>
            </View>

          ),
        }}
      />
      <Tab.Screen
        name="category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ position: 'relative' }}>
                <View
                  style={{
                    color: focused ? '#000' : '#858b9b',
                    justifyContent: 'center',
                  }}
                >
                  <SimpleLineIcons
                    name={'grid'}
                    size={20}
                    color={focused ? '#000' : '#858b9b'}
                  />
                </View>
                {focused && (
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: 6,
                      width: 6,
                      borderRadius: 20,
                      position: 'absolute',
                      left: '5%',
                      bottom: -12
                    }}
                  />
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ position: 'relative' }}>
                <View
                  style={{
                    color: focused ? '#000' : '#858b9b',
                    justifyContent: 'center',
                  }}
                >
                  <EvilIcons
                    name={'user'}
                    size={35}
                    color={focused ? '#000' : '#858b9b'}
                  />
                </View>
                {focused && (
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: 6,
                      width: 6,
                      borderRadius: 20,
                      position: 'absolute',
                      left: '12%',
                      bottom: -10
                    }}
                  />
                )}
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>

  );
}


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={loginScreen} />
        <Tab.Screen name="home" component={MyTabs} />
        <Tab.Screen name="productDetail" component={ProductDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App