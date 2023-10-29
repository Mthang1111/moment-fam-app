import { StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "native-base";
import ActivityItem from "./ActivityItem";
import { IActivity } from "../../types/activities";

export type Props = {
  data: IActivity[];
};

const ActivityList = ({ data }: Props) => {
  return <FlatList data={data} renderItem={({ item }) => <ActivityItem data={item} />} />;
};

export default ActivityList;

const styles = StyleSheet.create({});
