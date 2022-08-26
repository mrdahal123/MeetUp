import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../ReusableComponents/Scaling';
import Theme from '../../../ReusableComponents/Theme';
import BaseStyle from '../../../ReusableComponents/BaseStyle';
import Shadow from '../../../ReusableComponents/Shadow';
const borderRadius = scale(20);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.white,
  },
  header: {
    width:BaseStyle.DEVICE_WIDTH,
    height:scale(300),
    justifyContent:'center',
    alignItems:'center',
    marginTop:-100
  },
  wrapper:{
    paddingHorizontal: scale(15),
    width:BaseStyle.DEVICE_WIDTH
  },
  eye:{
    width: 20,
    height: 20,
    resizeMode: 'cover',
    tintColor: Theme.lightGray,
  },
  inputicon:{
    width: 20, 
    height: 20,
     resizeMode: 'cover'
    },
  imgCon: {
    position:'absolute',
    width: scale(80),
    height: scale(80),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.white,
    borderRadius: 100,
    top: moderateScale(200),
  },
  gif: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  welcomeTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '600',
  },
  subhead:{fontSize: 16, color: '#000', fontWeight: '400',lineHeight:scale(30)},
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  textInput: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Theme.lightGray,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: borderRadius,
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(10),
  },
  input: {
    width: '82%',
  },
  forgot: {
    color: Theme.red,
    fontSize: 14,
    alignSelf: 'flex-end',
    marginRight: scale(6),
    marginVertical: verticalScale(5),
    fontWeight: '500',
  },
  signin: {
    backgroundColor: Theme.red,
    borderRadius: borderRadius,
    marginVertical: verticalScale(10),
  },
  hrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  hr: {
    borderBottomWidth: 1,
    width: '35%',
    borderColor:Theme.gray
  },
  hrText: {
    marginHorizontal: scale(5),
    fontSize: 16,
    color: Theme.red,
  },
  socialMediaContainer: {
    marginVertical: verticalScale(25),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIconCircle:{
    width:scale(30),
    height:scale(30),
    backgroundColor:Theme.red,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
  },
  socialIcon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    tintColor:'#fff'
  },
});
export default styles;
