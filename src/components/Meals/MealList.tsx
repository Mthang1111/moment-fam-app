import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { IMeal } from "../../types/meals";
import MealItem from "./MealItem";
import VideoPopup from "../VideoPopup";

type Props = {
  data: IMeal[];
};

const MealList = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<IMeal | null>(null);
  return (
    <>
      <VideoPopup isOpen={isOpen} data={item} onClose={() => setIsOpen(false)} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <MealItem
            data={item}
            mt={index === 0 ? "4" : "5"}
            onPress={() => {
              setItem(item);
              setIsOpen(true);
            }}
          />
        )}
      />
    </>
  );
};

export default MealList;

const styles = StyleSheet.create({});
