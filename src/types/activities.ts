import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseDB } from "../firebase";

export enum EActivityType {
  IN_DOOR,
  OUT_DOOR,
  SOCIAL,
}

export interface IActivity {
  thumbnail: string;
  title: string;
  desc: string;
  // type: EActivityType;
  contents: string[];
}

const ActivityRef = collection(firebaseDB, "activities");

export async function getAllActivities() {
  // const q = query(ActivityRef, where("type", "==", activityType));
  const activities = await getDocs(ActivityRef);
  return activities.docs.map((storyDoc) => storyDoc.data() as IActivity);
}
