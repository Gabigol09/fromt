import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import ProfilesScreen from '../screens/profiles/profiles-screen';
import ProfileDetailScreen from '../screens/profiles/profile-detail-sceen';
import { HomeTabs } from './tabs';
import NewEventScreen from '../screens/new-event-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
    const navigation = useNavigation()
  return (
    <Stack.Navigator
    screenOptions={()=>navOptions(navigation)}
    >
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
      <Stack.Screen name="New Event" component={NewEventScreen} />
    </Stack.Navigator>
  );
}


export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Profiles" component={ProfilesScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
}