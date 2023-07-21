import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Message} from '../routes/chats/types';

const MessageListItem: React.FC<{item: Message; username: string}> = ({
  item,
  username,
}) => {
  const status = item.user !== username;
  return (
    <View>
      <View
        style={
          status
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, {alignItems: 'flex-end'}]
        }>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="person-circle-outline"
            size={30}
            color="black"
            style={styles.mavatar}
          />
          <View
            style={
              status
                ? styles.mmessage
                : [styles.mmessage, {backgroundColor: 'rgb(194, 243, 194)'}]
            }>
            <Text>{item.text}</Text>
          </View>
        </View>
        <Text style={{marginLeft: 40}}>{item.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mmessageWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  mmessage: {
    maxWidth: '50%',
    backgroundColor: '#f5ccc2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
  mavatar: {
    marginRight: 5,
  },
});

export default MessageListItem;
