import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../pages/Landing";
import TicketPage from "../pages/TicketPage";
import PaymentPage from "../pages/Payment";
import HeaderLogo from "../components/Header/HeaderLogo";
import NotificationIcon from "../components/NotificationIcon";
import HeaderBackButton from "../components/Header/HeaderBackButton";

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage ">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerTitle: () => <HeaderLogo />,
            headerStyle: {
              backgroundColor: "#1E1E1E",
              shadowColor: "transparent", // this covers iOS
              elevation: 0, // this covers Android
            },
            headerTitleAlign: "center",
            headerRight: () => <NotificationIcon />,
          }}
        />
        <Stack.Screen name="TicketPage" component={TicketPage} options={{
          headerTitle: () => <HeaderLogo />,
          headerStyle: {
            backgroundColor: "#1E1E1E",
              shadowColor: "transparent", // this covers iOS
              elevation: 0, // this covers Android
          },
          headerTitleAlign: 'center',
          headerBackImage: () => <HeaderBackButton/>
        }}/>
        <Stack.Screen name="PaymentPage" component={PaymentPage} options={{
          headerTitle: () => <HeaderLogo />,
          headerStyle: {
            backgroundColor: "#1E1E1E",
              shadowColor: "transparent", // this covers iOS
              elevation: 0, // this covers Android
          },
          headerTitleAlign: 'center',
          headerBackImage: () => <HeaderBackButton/>

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
