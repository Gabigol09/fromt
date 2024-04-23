import { HeaderBackButton } from "@react-navigation/elements"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { View, Text } from "react-native"



const ProfileDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {profileId} = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton
                    tintcolor="white"
                    onPress={() => {
                        navigation.goBack
                    }}
                />
            ),
    });
}, [])

return (
    <View>
        <Text>Profile id: {profileId}</Text>
    </View>
);

}

export default ProfileDetailScreen;