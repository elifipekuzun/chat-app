import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import LoginScreen from './src/routes/login';
import ChatsScreen from './src/routes/chats';
import MessagesScreen from './src/routes/messages';
import {store} from './src/states/store';
import {MainNavigationParamList} from './src/utils/navigation-types';

const Stack = createStackNavigator<MainNavigationParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: 'Chats',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Messaging" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
