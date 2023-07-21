import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Room, Message} from '../routes/chats/types';
import {RootNavigationParams} from '../utils/navigation-types';

const ChatListItem: React.FC<{item: Room}> = ({item}) => {
  const navigation = useNavigation<RootNavigationParams>();
  const [messages, setMessages] = useState<Message | undefined>();

  useLayoutEffect(() => {
    setMessages(item.messages[item.messages.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = () => {
    navigation.navigate('Messaging', {
      id: item.id,
      name: item.name,
    });
  };

  return (
    <Pressable style={styles.cchat} onPress={handleNavigation}>
      <Icon
        name="person-circle-outline"
        size={45}
        color="black"
        style={styles.cavatar}
      />

      <View style={styles.crightContainer}>
        <View>
          <Text style={styles.cusername}>{item.name}</Text>

          <Text style={styles.cmessage}>
            {messages?.text ? messages.text : 'Tap to start chatting'}
          </Text>
        </View>
        <View>
          <Text style={styles.ctime}>
            {messages?.time ? messages.time : 'now'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cchat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: 80,
    marginBottom: 10,
  },
  cavatar: {
    marginRight: 15,
  },
  cusername: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cmessage: {
    fontSize: 14,
    opacity: 0.7,
  },
  crightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  ctime: {
    opacity: 0.5,
  },
});

export default ChatListItem;
