import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase";

export interface IStory {
  thumbnail: string;
  title: string;
  desc: string;
  date: string;
  contents: string[];
}

// https://www.soulveda.com/short-stories/family/

const StoryRef = collection(firebaseDB, "stories");

export async function getAllStories() {
  const stories = await getDocs(StoryRef);
  return stories.docs.map((storyDoc) => storyDoc.data() as IStory);
}
