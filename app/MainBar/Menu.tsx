import mainStyles from '../Styles/MainStyles';
import barStyles from '../Styles/BarStyles';
import { useTheme } from '../Theme';
import {
  View,
  Text,
} from 'react-native';

const Menu = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[mainStyles.container, barStyles.menu, {borderColor:theme.text}]}>
      <View style={[barStyles.menuOption, {borderBottomColor: theme.text}]}>
        <Text style={[mainStyles.mainText, {color: theme.text}]}>Lego Sets</Text>
      </View>
      <View style={[barStyles.menuOption, {borderBottomColor: theme.text}]}>
        <Text style={[mainStyles.mainText, {color: theme.text}]}>Minifigures</Text>
      </View>
      <View style={[barStyles.menuOption, {borderBottomColor: theme.text}]}>
        <Text style={[mainStyles.mainText, {color: theme.text}]}>News From The Lego World</Text>
      </View>
      <View style={[barStyles.menuOption,{borderBottomColor: theme.text}, {borderBottomWidth: 0}]}>
        <Text style={[mainStyles.mainText, {color: theme.text}]}>that thing</Text>
      </View>
    </View>
  )
}

export default Menu;
