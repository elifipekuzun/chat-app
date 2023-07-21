import * as React from 'react';
import {FlatList, View} from 'react-native';
import Block from '../../components/UI/block';
import {Button, IconButton} from 'react-native-paper';
import ModalComponent from '../../components/UI/modal';
import axios from 'axios';
import ChatListItem from '../../components/chat-list-item';
import {Room} from './types';
import socket from '../../utils/socket';
import {styles} from './assets/styles';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', // for ios => http://localhost:3000,
});

const ChatsScreen = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [chatList, setChatList] = React.useState<Room[]>([]);

  React.useEffect(() => {
    const fetchChatList = async () => {
      try {
        const {data} = await api.get('/');
        setChatList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatList();
  }, []);

  React.useEffect(() => {
    socket.on('roomList', rooms => {
      setChatList(rooms);
    });
  }, []);

  return (
    <React.Fragment>
      <Block>
        <Block.Header
          title={'Chats'}
          headerRight={
            <IconButton
              icon={'pencil'}
              iconColor="purple"
              onPress={() => setIsVisible(true)}
            />
          }
        />
      </Block>
      <Block style={styles.flexGrow}>
        <FlatList
          keyExtractor={item => item.id}
          data={chatList}
          renderItem={({item}) => <ChatListItem item={item} />}
        />
      </Block>
      <View style={[styles.buttonsContainer, styles.marginVertical16]}>
        <Button style={styles.marginHorizontal8} mode="contained">
          Create Room
        </Button>
        <Button style={styles.marginHorizontal8} mode="contained">
          Join a Room
        </Button>
      </View>
      <ModalComponent
        visible={isVisible}
        onCancelPress={() => setIsVisible(false)}
      />
    </React.Fragment>
  );
};

export default ChatsScreen;
