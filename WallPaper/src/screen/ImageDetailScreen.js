import React, { useCallback, useState } from "react";
import { ActivityIndicator, View, useWindowDimensions } from "react-native";
import Typography from "../components/Typography";
import Header from "../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import RemoteImage from "../components/RemoteImage";
import Button from "../components/Button";
import Icons from "../components/Icons";
import * as FileSystem from "expo-file-system";
import * as MedaiaLibrary from "expo-media-library";

const ImageDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [downloading, setDownloading] = useState(false);
  const onPressBack = useCallback(() => {
    navigation.goBack();
  });
  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params?.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );
    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log("Finished Downloading to", uri);
      const permissionResult = await MedaiaLibrary.getPermissionsAsync(true);
      console.log("permission Result: ", permissionResult);
      if (permissionResult.status === "denied") {
        //아예 못쓰는 상태
        setDownloading(false);
        return;
      }
      if (permissionResult.status === "undetermined") {
        const requestResult = await MedaiaLibrary.requestPermissionsAsync();
        console.log(requestResult);
        if (requestResult.status === "denied") {
          setDownloading(false);
          return;
        }
        const asset = await MedaiaLibrary.createAssetAsync(uri);
        const album = await MedaiaLibrary.createAlbumAsync(
          "MyFirstAlbum",
          asset,
          false
        );
      }
    } catch (ex) {}
    setDownloading(false);
  }, []);
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon
            iconName={"arrow-back"}
            onPress={onPressBack}
          ></Header.Icon>
          <Header.Title title="Image Detail"></Header.Title>
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Typography size={20}>IMAGE Detail</Typography>
        <RemoteImage
          url={route.params?.url}
          width={width}
          height={width * 1.5}
        />
        <Typography size={20}>Image Detail</Typography>
      </View>
      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
          {downloading ? (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator />
            </View>
          ) : (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"white"}>DOWNLOAD</Typography>
              <Icons name="download" size={24} color="white" />
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};

export default ImageDetailScreen;
