import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { eventId, title, description } = route.params

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton
                tintColor="white"
                label=" "
                onPress={() => navigation.goBack()}
                />
            )
        })
    }, [])

    return ( 
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>This is event detail screen for {eventId} </Text>
            <Text style={{fontSize: 14}}>{title}</Text>
            <Text style={{fontSize: 14}}>{description}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
 
export default EventDetailScreen;