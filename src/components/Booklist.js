import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';

import books from '../../data/books.json';

const BookList = (props) => {
    return (
        <View>
            <FlatList
                data={books}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                        onPress={() => {
                            props.navigation.navigate('BookDetail', {book: item});
                        }}
                        >
                            <Text style={styles.textStyle}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={book => book.title}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50, //adds spacing above and below

    }
});

export default withNavigation(BookList); //adds nav and props behind the scenes