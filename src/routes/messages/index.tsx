import * as React from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {RootScreenParams} from '../../utils/navigation-types';
import socket from '../../utils/socket';
import {Message} from '../chats/types';
import Block from '../../components/UI/block';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import MessageListItem from '../../components/message-list-item';
import {styles} from './assets/styles';
import {Button} from 'react-native-paper';

const MessagesScreen = ({route, navigation}: RootScreenParams) => {
  const {name, id} = route.params || {};
  const {username} = useTypedSelector(state => state.auth);
  const [message, setMessage] = React.useState('');
  const [roomMessages, setRoomMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: 'Hello guys, welcome!',
      time: '07:50',
      user: 'Tomer',
    },
    {
      id: '2',
      text: 'Hi Tomer, thank you! 😇',
      time: '08:50',
      user: 'David',
    },
  ]);

  React.useLayoutEffect(() => {
    navigation.setOptions({title: name});
    socket.emit('findRoom', id);
    socket.on('foundRoom', messages => {
      setRoomMessages(messages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;

    const data = {
      room_id: id,
      message,
      user: username,
      timestamp: {hour, mins},
    };
    socket.emit('newMessage', data);
  };

  return (
    <React.Fragment>
      <Block style={styles.flexGrow}>
        {roomMessages.length > 0 && username ? (
          <FlatList
            keyExtractor={item => item.id}
            data={roomMessages}
            renderItem={({item}) => (
              <MessageListItem item={item} username={username} />
            )}
          />
        ) : (
          ''
        )}
      </Block>
      <View style={styles.messaginginputContainer}>
        <TextInput
          style={styles.messaginginput}
          onChangeText={value => setMessage(value)}
        />
        <Button onPress={handleNewMessage} mode="contained">
          Send
        </Button>
      </View>
    </React.Fragment>
  );
};

export default MessagesScreen;
