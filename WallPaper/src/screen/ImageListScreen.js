import React from 'react';
import { FlatList, Image, View } from "react-native";
import Header from "../components/Header/Header";
import PhotoListItem from "../components/PhotoListItem";
import Typography from "../components/Typography";
import { IMAGE_LIST } from "../constants";
import RemoteImage from "../components/RemoteImage";
import dog from '../../assets/images/dog.jpg';

const ImageListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="IMAGE LIST" />
        </Header.Group>
      </Header>
      {/* <Image source={dog}/> */}
      {/* <Image
        source={{ url: "https://picsum.photos/id/237/200/300" }}
        resizeMode="cover"
        onLoadEnd={() => alert("Image Loaded!!")}
      /> */}
      <FlatList
        style={{ flex: 1 }}
        data={IMAGE_LIST}
        renderItem={({ item }) => {
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
};

export default ImageListScreen;
