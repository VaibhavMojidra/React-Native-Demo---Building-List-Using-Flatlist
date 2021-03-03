import React from 'react';
import { FlatList,StyleSheet,Text } from 'react-native';

const ListScreen = ()=>{
    const friends=[ //Key is must + key should be string + should be unique
        {name: "F 1", key: '1'},
        {name: "F 2", key: '2'},
        {name: "F 3", key: '3'},
        {name: "F 4", key: '4'},
        {name: "F 5", key: '5'},
        {name: "F 6", key: '6'},
        {name: "F 7", key: '7'},
        {name: "F 8", key: '8'},
        {name: "F 9", key: '9'},
        {name: "F 10", key: '10'},
        {name: "F 11", key: '11'},
        {name: "F 12", key: '12'},
        {name: "F 13", key: '13'},
        {name: "F 14", key: '14'},
    ];

    // return(
    //     <FlatList data={friends} renderItem={(element)=>{
    //         return <Text>{element.item.name}</Text>
    //     }}></FlatList>
    // );
    // or only item
    return(
        <FlatList data={friends} renderItem={({item})=>{
            return (<Text style={styles.textStyle}>{item.name}</Text>);
        }}
        keyExtractor={friend=>friend.name}
        horizontal={true} //horizontal listing
        showsHorizontalScrollIndicator={false}// hiding horizotal scroll bar
        ></FlatList>
    );
};
const styles=StyleSheet.create({
    textStyle:{
        marginVertical: 50,
        marginHorizontal: 50
    }    
});
export default ListScreen;