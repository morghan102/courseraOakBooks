import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BooksScreen from "./src/screens/BooksScreen";

const navigator = createStackNavigator(
  {
    Books: BooksScreen //key val pair
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: { //nav options are opts used for every diff screen. This 1 caan be for every diff header
      title: 'Books'
    }
  }
);

export default createAppContainer(navigator);