import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    textAlign: 'left',
    borderBottomColor: theme.colors.secondary85,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35
  },
  controlButton: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.secondary100,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 65
  },
  image: {
    width: '100%',
  },
  linha: {
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }

});