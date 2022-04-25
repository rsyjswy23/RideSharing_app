import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id: "01",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen",
    },
    {
        id: "02",
        title: "Order food",
        image: "https://www.transparentpng.com/thumb/food/PIIPbV-cola-potato-chips-burger-food-free-png.png",
        screen: "EatScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-6 pt-4 bg-gray-200 m-2`}
                disable={!origin}
            >
            <View style={tw`${!origin && 'opacity-20'}`}>
                <Image
                    style={{width: 120, height: 120}}
                    source={{uri: item.image}}
                />
                <Text style={tw`mt-2`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright" color="white" type="antdesign"/>
            </View>
            </TouchableOpacity>
        )} 
        />
    )
}

export default NavOptions;
