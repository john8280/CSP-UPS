import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { Card, Divider, Icon } from '@rneui/themed'
import MapView from 'react-native-maps'


type Props = {
    order: Order
}
const DeliveryCard = ({order}: Props) => {
const tailwind = useTailwind();

  return (
    <Card containerStyle={[tailwind('rounded-lg my-2'),
        {
            padding: 0,
            paddingTop: 16,
            shadowColor: "black",
            shadowOffset: {width:0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            backgroundColor: "#59C1CC"
        }
    ]} >
        <View>
            <Icon name='box' type='entypo' size={50} color="white" />
        </View>

        <View>
        <Text
        style={tailwind("text-xs text-center uppercase text-white font-bold")}
        >{order.carrier} - {order.trackingId}</Text>
        <Text> Expected Delivery: {new Date(order.createdAt).toLocaleDateString()} </Text>
        <Text style={tailwind(" text-white text-center text-lg font-bold")}>DeliveryCard : {new Date(order.createdAt).toLocaleDateString()}</Text>
        <Divider  color='white'/>
        </View>

        <View>
            <Text>  Address </Text>
            <Text> {order.Address}, {order.City}</Text>
            Shipping Cost: ${order.shippingCost} <Text> Shipping Cost: ${order.shippingCost}</Text>
        </View>

        <Divider color='white ?' />
        <View>
            {order.trackingItems.items.map((item) => (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.quantity}</Text>
            </View>
        
            ))}
        </View>

        <MapView initialRegion={
            {latitude: order.Lat,
                longitude: order.Lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            } }  style={[tailwind("w-full")]}>

        </MapView>
    </Card>
  )
}

export default DeliveryCard