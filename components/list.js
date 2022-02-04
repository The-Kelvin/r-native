import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function MovieList() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token de649b169c7a530595d5fa2cfa3b8f3ccaf68a85`
            }
        }).then( resp => resp.json())
        .then( jsonRes => setMovies(jsonRes))
        .catch( error => console.log(error));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={({item}) => {
                    return <Text key={item.id}>{item.title}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
