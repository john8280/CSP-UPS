import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomersScreen from "./screens/CustomersScreen"
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://public519c5487423984b6.stepzen.net/api/loitering-anaconda/__graphql ',
  cache: new InMemoryCache(),
});  //need to add in stepzen localhost 

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
       <NavigationContainer>
    <RootNavigator />
    </NavigationContainer>
    </TailwindProvider>
  );
}

