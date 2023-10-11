import 'react-native-gesture-handler';
import RootNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-BlackItalic":require("./assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Bold":require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light":require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Italic":require("./assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Medium":require("./assets/fonts/Poppins-Medium.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}
