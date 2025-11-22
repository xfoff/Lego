import mainStyles from '../Styles/MainStyles';
import barStyles from '../Styles/BarStyles';
import { useTheme } from '../Theme';
import QR from '../Icons/QR';
import { useCameraPermissions } from "expo-camera";
import Hamburger from '../Icons/Hamburger';
import { Stack, router }from "expo-router"
import Cross from '../Icons/Cross';
import { useState } from 'react';
import Menu from './Menu';
import {
  View,
  Text,
  Pressable,
} from 'react-native';

const Bar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const [premision, requestPremission] = useCameraPermissions();
  const isPremisionGranted = Boolean(premision?.granted)

  const hamburgerPressed = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <View style={barStyles.wrapper}>
      <View style={[mainStyles.container, {backgroundColor: theme.secondary}]}>
        <Pressable onPress={() =>{ !isPremisionGranted ? requestPremission : router.push('/scanner');}}>
          <QR color={theme.icons} svgWidth={24} svgHeight={24}></QR>
        </Pressable>
        <Text style={[mainStyles.mainText, {color: theme.text}]}>Collection</Text>
        <Pressable onPress={hamburgerPressed}>
          {menuOpen ?
            <Cross color={theme.icons} svgWidth={26} svgHeight={26} />
            :
            <Hamburger color={theme.icons} svgWidth={26} svgHeight={26} />
          }
        </Pressable>
      </View>
      {menuOpen && <Menu />}
    </View>
  )
}

export default Bar;
