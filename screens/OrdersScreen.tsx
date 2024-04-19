import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { useTailwind } from 'tailwind-rn';
import useOrders from '../hooks/useOrders';

// type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrderScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Orders'>,NativeStackNavigationProp<RootStackParamList> >;

const OrdersScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const {loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
    headerShown: false,
    tabBarLabel: ({focused, color}) => (
      <Text style={{color: focused ? "pink" : color, fontSize: 10}}>Orders</Text>
    )

  })
  }, [])

  return (
    <View>
      <Text>OrdersScreen</Text>
    </View>
  )
}

export default OrdersScreen