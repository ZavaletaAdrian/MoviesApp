import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Mi Villano Favorito 👀",
      director: "Guillermo del Toro",
      url: "https://musicart.xboxlive.com/7/7a471100-0000-0000-0000-000000000002/504/image.jpg",
    },
    {
      id: 2,
      name: "Pinocho 🪵",
      director: "Guillermo del Toro",
      url: "https://dx35vtwkllhj9.cloudfront.net/netflix/guillermo-del-toros-pinocchio/images/regions/us/onesheet.jpg",
    },
    {
      id: 3,
      name: "SharkNado 🦈",
      director: "Pablo Camorlinga",
      url: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9996687_p_v13_ab.jpg",
    },
    {
      id: 4,
      name: "Kung Fu Panda 🐼",
      director: "Mike Osborn",
      url: "https://musicart.xboxlive.com/7/72111200-0000-0000-0000-000000000002/504/image.jpg",
    },
    {
      id: 5,
      name: "Interstellar",
      director: "Christopher Nolan",
      url: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Movies App! 🍿</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <>
            <Image style={styles.moviePoster} source={{ uri: item.url }} />
            <Text>{item.name}</Text>
            <Text>{item.director}</Text>
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  moviePoster: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
});
