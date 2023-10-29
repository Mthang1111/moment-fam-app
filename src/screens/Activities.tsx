import { Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Center, Column, Heading, ScrollView } from "native-base";
import ActivityList from "../components/Activities/ActivityList";
import { IActivity, getAllActivities } from "../types/activities";
import { useAppDispatch, useAppSelector } from "../store";
import LoadingOverlay from "../components/LoadingOverlay";
import { removeLoading, setLoading } from "../store/loading.reducer";

const Activities = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.loading);

  const [activities, setActivities] = useState<IActivity[]>([]);
  
  useEffect(() => {
    async function loadData() {
      try {
        dispatch(setLoading());
        const allActivities = await getAllActivities();
        setActivities(allActivities);
      } catch (err) {
        Alert.alert("Thông báo", (err as any).message);
      } finally {
        dispatch(removeLoading());
      }
    }
    loadData();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <Column space="4" flex={1} bg="white">
      <ActivityList data={activities} />
    </Column>
  );
};

export default Activities;

const styles = StyleSheet.create({});
