import {
  HEADING_FONT_SIZE,
  INFO_FONT_SIZE,
  BUTTON_HEIGHT,
  BUTTON_LABEL_SIZE,
  STANDARD_FLEX,
} from '../../config/constants';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Creating styles
const styles = StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  contentWrapper: {
    width: '95%',
    padding: scale(15),
    elevation: scale(2),
    position: 'relative',
    alignItems: 'center',
    borderRadius: scale(5),
    justifyContent: 'center',
    backgroundColor: '#C9DEFE',
  },
  actionHeading: {
    color: '#5B6576',
    fontWeight: 'bold',
    fontSize: HEADING_FONT_SIZE,
  },
  actionInfo: {
    color: '#5B6576',
    fontWeight: '500',
    fontSize: INFO_FONT_SIZE,
    marginVertical: scale(10),
  },
  button: {
    elevation: scale(3),
    flexDirection: 'row',
    alignItems: 'center',
    height: BUTTON_HEIGHT,
    borderRadius: scale(5),
    justifyContent: 'center',
    backgroundColor: '#45B04E',
    paddingHorizontal: scale(15),
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: '700',
    marginStart: scale(5),
    letterSpacing: scale(1),
    textTransform: 'uppercase',
    fontSize: BUTTON_LABEL_SIZE,
  },
  emailIconWrapper: {
    top: scale(15),
    right: scale(15),
    position: 'absolute',
  },
  countBadge: {
    top: scale(-10),
    width: scale(20),
    right: scale(-10),
    height: scale(20),
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: scale(10),
    justifyContent: 'center',
  },
  count: {
    color: '#fff',
    fontWeight: '700',
  },
});

// Exporting styles
export default styles;
