import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { Button, Center, Column } from "native-base";
import StoryList from "../components/Stories/StoryList";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabsParams } from "../navigations/config";
import { Ionicons } from "@expo/vector-icons";
import { removeLoading, setLoading } from "../store/loading.reducer";
import { IStory, getAllStories } from "../types/stories";
import LoadingOverlay from "../components/LoadingOverlay";

type Props = BottomTabScreenProps<BottomTabsParams, "Home">;

const Home = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.loading);
  const [stories, setStories] = useState<IStory[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <TouchableOpacity style={{ paddingHorizontal: 12 }}>
          <Ionicons name="calendar-outline" color={tintColor} size={24} />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        dispatch(setLoading());
        const allStories = await getAllStories();
        setStories(allStories);
      } catch (err) {
        Alert.alert("Thông báo", (err as any).message);
      } finally {
        dispatch(removeLoading());
      }
    }
    loadData();
  }, []);

  return (
    <Column flex="1" bg="white">
      {isLoading ? <LoadingOverlay /> : <StoryList data={stories} />}
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({});
