import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { PublicApiScreen } from '../screens/PublicApiScreen';
import { ReduxScreen } from '../screens/ReduxScreen';
import { GreatDesignScreen } from '../screens/GreatDesignScreen';

export type RootStackParams = {
    Home: undefined;
    PublicApi: undefined;
    Redux: undefined;
    GreatDesign: undefined;
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        shadowColor: 'transparent',
                    },
                    cardStyle: {
                        backgroundColor: '#ececea',
                    },
                }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='PublicApi' component={PublicApiScreen} />
                <Stack.Screen name='Redux' component={ReduxScreen} />
                <Stack.Screen name='GreatDesign' component={GreatDesignScreen} />
            </Stack.Navigator>
    )
}