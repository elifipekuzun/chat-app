import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './assets/styles';

const BlockHeader: React.FC<{
  title: string;
  headerRight?: React.ReactNode;
}> = ({title, headerRight}) => {
  return (
    <View style={styles.headerTopContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        {headerRight && headerRight}
      </View>
    </View>
  );
};

export default BlockHeader;
