import mainStyles from '../Styles/MainStyles';
import collectionStyles from '../Styles/CollectionStyles';
import { useTheme } from '../Theme';
import { useState } from 'react';
import { CollectionT } from '../types';
import data from '../../assets/TestItems.json';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

const CollectionView = () => {
  const [collection, setCollection] = useState<CollectionT[]>(data);
  const { theme, toggleTheme } = useTheme();

  return (
    <ScrollView style={collectionStyles.collection}>
      {collection.map(element => (
        <View style={[
          mainStyles.container,
          collectionStyles.element,
          {
            backgroundColor: theme.secondary,
            borderColor: theme.pink,
          }
        ]} key={element.id}>
          <Image source={{ uri: element.image }} style={[collectionStyles.image, {borderColor: theme.pink}]}/>
          <Text style={[
            mainStyles.mainText, collectionStyles.text,
            {
              backgroundColor: theme.tetriary,
              color: theme.text,
            }
          ]}>
            {element.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default CollectionView;
