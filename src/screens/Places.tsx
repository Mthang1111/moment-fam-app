import { Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Column, ScrollView } from "native-base";
import ActivityList from "../components/Activities/ActivityList";
import { IStory } from "../types/stories";
import { useAppDispatch, useAppSelector } from "../store";
import { removeLoading, setLoading } from "../store/loading.reducer";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase";
import LoadingOverlay from "../components/LoadingOverlay";

const Places = () => {
  const [places, setPlaces] = useState<IStory[]>([]);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.loading);

  useEffect(() => {
    async function loadData() {
      try {
        dispatch(setLoading());
        const PlaceRef = collection(firebaseDB, "places");
        const places = await getDocs(PlaceRef);
        const allPlaces = places.docs.map((placeDoc) => placeDoc.data() as IStory);
        setPlaces(allPlaces);
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
    <Column flex={1} bg="white">
      <Column mt="3">
        <ActivityList data={places} />
      </Column>
    </Column>
  );
};

export default Places;

const styles = StyleSheet.create({});
