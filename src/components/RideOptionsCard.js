import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "05",
        title: "Uber X",
        multipler: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id: "06",
        title: "Uber XL",
        multipler: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id: "07",
        title: "Uber LUX",
        multipler: 1.7,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    },

];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride -
                {travelTimeInformation?.distance?.text}</Text>
            </View>

            <FlatList data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item: {id, title, multipler, image}, item}) => (
                    <TouchableOpacity 
                      onPress={() => setSelected(item)}
                      style={tw`flex-row justify-between items-center px-10 ${
                          id === selected?.id && "bg-gray-200"
                      }`}>
                        <Image 
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image}}
                        />
                        <View style={tw``}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-us', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(
                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE *
                                multipler) / 100
                            )}

                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto`}>
                <TouchableOpacity 
                  disable={!selected} 
                  style={tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-400"}`}
                >
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

