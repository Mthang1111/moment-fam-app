import { Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Column } from "native-base";
import MealList from "../components/Meals/MealList";
import LoadingOverlay from "../components/LoadingOverlay";
import { removeLoading, setLoading } from "../store/loading.reducer";
import { useAppDispatch, useAppSelector } from "../store";
import { IMeal, getAllMeals } from "../types/meals";

const Meals = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.loading);
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        dispatch(setLoading());
        const allMeals = await getAllMeals();
        setMeals(allMeals);
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
      <MealList data={meals} />
    </Column>
  );
};

export default Meals;

const styles = StyleSheet.create({});
