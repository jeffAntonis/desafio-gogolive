import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import capitalize from 'capitalize';

import api from './services/api';
import {mapComponent} from './utils/mapper';
import {Page} from './interfaces/page';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabsMenu({pages}: any) {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#f8f8f8'}}
      initialRouteName="Camara">
      {pages.map((page: Page) => (
        <Tab.Screen
          key={page.title}
          name={page.title}
          component={mapComponent(page.component)}
          initialParams={{content: page.content}}
          options={{
            ...(page.title === 'Comunicar' && {tabBarBadge: 1}),
            tabBarLabel: page.title,
            tabBarIcon: ({color}) => (
              <FontAwesome5Icons name={page.icon} color={color} size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function Routes() {
  const [pages, setPages] = useState<Page[]>([]);

  const getPages = async () => {
    try {
      const {data} = await api.get('/pages');
      data.map((page: Page) => {
        let url = page.url;
        url = url.replace(/^page:\/\//g, '');
        url = url.replace(/-/g, ' ');
        url = capitalize.words(url);
        url = url.replace(/ /g, '');
        page.component = url;
      });
      setPages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  return (
    <NavigationContainer>
      {pages.length > 0 && (
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Tabs"
            component={(props) => <TabsMenu {...props} pages={pages} />}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
