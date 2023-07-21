import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    position: 'relative',
  },
  headerTopContainer: {
    backgroundColor: '#F7F7F7',
    height: 70,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
  },
});
