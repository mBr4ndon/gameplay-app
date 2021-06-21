import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },

  image: {
    width: '100%',
    height: 360,
  },

  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },

  title: {
    color: theme.colors.reading,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16
  },

  subtitle: {
    color:theme.colors.reading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64
  }

})