import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  messaginginputContainer: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    maxHeight: 100,
    backgroundColor: 'white',
  },
  messaginginput: {
    borderWidth: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex: 1,
    marginRight: 10,
    borderRadius: 30,
  },
});
