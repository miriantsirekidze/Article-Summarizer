import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import Home from "./screens/Home";
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} options={{ animation: "slide_from_left" }}/>
          <Stack.Screen name="Settings" component={Settings} options={{ animation: "slide_from_right" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


