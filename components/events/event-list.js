import { Text, View, FlatList, RefreshControl } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

const EventList = ({onRefresh}) => {
    const renderItem = ({item}) => {
        return <EventItem id={item.id} title={item.title} description={item.description} qrCode={item.qr_code} />
    }
    return ( 
        <View>
            <FlatList 
                data={DUMMY_DATA}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
     );
}
 
export default EventList;