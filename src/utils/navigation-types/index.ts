import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type MainNavigationParamList = {
  Login: undefined;
  Chats: undefined;
  Messaging: {
    id: string;
    name: string;
  };
};

export type RootScreenParams = StackScreenProps<MainNavigationParamList>;
export type RootNavigationParams = StackNavigationProp<
  MainNavigationParamList,
  'Messaging'
>;
