import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "native-base";
import StoryItem from "./StoryItem";
import { IStory } from "../../types/stories";

type Props = {
  data: IStory[];
};

const StoryList = ({ data }: Props) => {
  return <FlatList data={data} renderItem={({ item }) => <StoryItem data={item} />} />;
};

export default StoryList;

const styles = StyleSheet.create({});
