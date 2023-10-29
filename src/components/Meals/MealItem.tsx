import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Column, Image, Row, Text } from "native-base";
import { IMeal } from "../../types/meals";

type Props = {
  data: IMeal;
  onPress: any;
  mt?: any;
};

const MealItem = ({ data, onPress, mt }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row
        p="4"
        space="3"
        bg="muted.100"
        my="2"
        mx="4"
        mt={mt}
        rounded="lg"
        shadow={3}
        alignItems="center"
      >
        <Image alt="thumbnail" source={{ uri: data.thumbnail }} size="md" rounded="lg" />
        <Column flex="1" space="1" h="16">
          <Text fontSize="md" fontWeight="semibold" numberOfLines={2}>
            {data.title}
          </Text>
        </Column>
      </Row>
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({});
