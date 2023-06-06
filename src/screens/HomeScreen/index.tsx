import {StatusBar} from 'react-native';
import React from 'react';
import {HomeScreenProps} from '../../routes/types';
import {useRoute} from '../../hooks';
import Text from '../../components/atoms/Text';
import SafeAreaView from '../../components/atoms/SafeAreaView';
import {API_URL, API_TOKEN} from '@env';
const HomeScreen = ({navigation, route}: HomeScreenProps<'HomeTab'>) => {
  const routes = useRoute<HomeScreenProps<'HomeTab'>['route']>();
  console.log(navigation, route, routes);
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Text>Api Url : {API_URL}</Text>
      <Text>Api Token : {API_TOKEN}</Text>
      <Text className="color-white">This is top text.</Text>
      <Text className="color-white">This is bottom text.</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
