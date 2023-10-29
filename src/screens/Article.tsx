import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Column, Divider, Heading, Image, ScrollView, Text } from "native-base";
import { IStory } from "../types/stories";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";

type Props = NativeStackScreenProps<RootStackParams, "Article">;

const Article = ({ navigation, route }: Props) => {
  const { data } = route.params;
  return (
    <ScrollView flex="1" bg="white">
      <Column space="3" safeAreaBottom>
        <Image alt="thumbnail" source={{ uri: data.thumbnail }} style={styles.thumbnail} />
        <Column px="4">
          <Heading fontWeight="semibold" fontSize="xl">
            {data.title}
          </Heading>
          <Text fontSize="sm" color="muted.500">
            {data.date}
          </Text>
          <Text fontStyle="italic" my="3">
            {data.desc}
          </Text>
          <Divider />
        </Column>

        <Column px="4" space="3">
          {typeof data.contents === "string" && <Text>{data.contents}</Text>}
          {typeof data.contents !== "string" &&
            data.contents.map((text) => <Text key={text.substring(0, 20)}>{text}</Text>)}
        </Column>
      </Column>
    </ScrollView>
  );
};

export default Article;

const IMAGE_W = Dimensions.get("window").width;
const IMAGE_H = IMAGE_W / 2;

const styles = StyleSheet.create({
  thumbnail: {
    width: IMAGE_W,
    height: IMAGE_H,
  },
});
