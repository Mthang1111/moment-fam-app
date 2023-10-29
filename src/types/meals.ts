import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase";

export interface IMeal {
  title: string;
  desc: string;
  videoUrl: string;
  thumbnail: string;
}

const MealRef = collection(firebaseDB, "meals");

export async function getAllMeals() {
  // const q = query(MealRef, where("type", "==", MealType));
  const meals = await getDocs(MealRef);
  return meals.docs.map((mealDoc) => mealDoc.data() as IMeal);
}
