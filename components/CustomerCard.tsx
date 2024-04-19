import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import CustomersScreen from '../screens/CustomersScreen';
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';
import { Card, Icon } from '@rneui/themed';


type Props = {
    userId: string;
    name: string;
    email: string;
};

const CustomerCard = ({email, name, userId }: Props) => {
    const { loading, error, orders } = useCustomerOrders(userId);
    const tailwind = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <Pressable onPress={() => navigation.navigate('MyModal',{
      name: name,
      userId: userId,
    })}>
      <Card containerStyle={tailwind("p-5 rounded-lg")}>CustomerCard
        <View>
            <View>
                <Text style={tailwind('text-2xt font-bold')}>{name}</Text>
                <Text style={[tailwind('text-sm'), {color:'#59C1CC'}]}>ID: {userId}</Text>
            </View>

            <View>
                <Text>{loading ? "loading ..." : `${orders.length} x ` }</Text>
                <Icon
                style={tailwind("mb-5 ml-auto")}
                name="box"
                type="entypo"
                color="#59C1CC"
                size={50}
                />
            </View>

        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </Pressable>
  )
}

export default CustomerCard