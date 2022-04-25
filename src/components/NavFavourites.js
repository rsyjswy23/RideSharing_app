import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "03",
        icon: "home",
        location: "Home",
        destination: "Sunset, San Francisco, CA",
    },
    {
        id: "04",
        icon: "briefcase",
        location: "Work",
        destination: "Palo Alto, CA",
    },
];


const NavFavourites = () => {
    return (
        <FlatList data={data} 
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-500`, {height:0.5}]} />
        )}

        renderItem={({item: {location, destination, icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-4`}>
                <Icon 
                    style={tw`mr-2 rounded-full bg-gray-300`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
