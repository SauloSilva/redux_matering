import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 54,
    width: 54,
  },

  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
