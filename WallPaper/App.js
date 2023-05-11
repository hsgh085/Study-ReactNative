import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigations from "./src/navigations/RootStackNavigations";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CounterScreen from "./src/screen/CounterScreen";
import { Provider } from "react-redux";
import store from './src/store/store';

export default function App() {
  return (
    // <NavigationContainer>
    //   <RootStackNavigations/>
    // </NavigationContainer>
    <SafeAreaProvider>
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    </SafeAreaProvider>
  );
}
