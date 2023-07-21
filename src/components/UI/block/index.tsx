import React from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import BlockHeader from './block-header';
import {styles} from './assets/styles';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

interface PropsType extends SafeAreaViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Block = ({children, style}: PropsType) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

Block.Header = BlockHeader;

export default Block;
