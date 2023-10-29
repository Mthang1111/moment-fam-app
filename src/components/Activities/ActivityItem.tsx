import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { IStory } from "../../types/stories";
import { Column, Image, Row, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { IActivity } from "../../types/activities";

type Props = {
  data: IActivity;
};

const ActivityItem = ({ data }: Props) => {
  const navigation = useNavigation<any>();
  const onPress = () => {
    navigation.navigate("Article", { data });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Row p="4" space="3" bg="muted.100" my="2" mx="4" rounded="lg" shadow={3} alignItems="center">
        <Image alt="thumbnail" source={{ uri: data.thumbnail }} size="md" rounded="lg" />
        <Column flex="1" space="1" h="16">
          <Text fontSize="md" fontWeight="semibold" numberOfLines={2}>
            {data.title}
          </Text>
        </Column>
        <Ionicons name="arrow-forward" size={30} color="#D4D4D4" />
      </Row>
    </TouchableOpacity>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({});
