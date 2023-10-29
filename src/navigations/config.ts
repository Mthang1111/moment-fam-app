import { IStory } from "../types/stories";

export type BottomTabsParams = {
  Home: undefined;
  Activities: undefined;
  Places: undefined;
  Meals: undefined;
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

export type RootStackParams = {
  TabNav: undefined;
  Article: { data: IStory };
};
