import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { IStory } from "../../types/stories";
import { Center, Column, Heading, Image, Row, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: IStory;
};

const StoryItem = ({ data }: Props) => {
  const navigation = useNavigation<any>();
  const onPress = () => {
    navigation.navigate("Article", { data });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Row px="4" space="3" py="2">
        <Image alt="thumbnail" source={{ uri: data.thumbnail }} w="12" h="12" rounded="lg" />
        <Column flex="1" space="1" h="16" borderBottomWidth={0.2} borderBottomColor="muted.300">
          <Text fontSize="md" numberOfLines={1}>
            {data.title}
          </Text>
          <Text fontSize="sm" color="muted.500">
            {data.date}
          </Text>
        </Column>
      </Row>
    </TouchableOpacity>
  );
};

export default StoryItem;

const styles = StyleSheet.create({});
