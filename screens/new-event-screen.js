import { useState, useLayoutEffect } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const NewEventScreen = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [alert, setAlert] = useState({
        isVisible: false,
        msg:''
    })

    const navigation = useNavigation()
    
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "add new event",
            headerLeft: () => (
                <HeaderBackButton
                tintColor="white"
                label=" "
                onPress={() => navigation.goBack()}
                />
            )
        })
    }, [])

    const handAddEvent = async() => {
        const d = date.toISOString().slice(0, 10)
        console.log(d, title, description)

        const data = {
            title,
            description,
            date: d,
        }
//precisa retornar os dados e jogar na data base (possivel interferencia)>
        const resposne = await fetch('http://127.0.0.1:8000/api/events/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })

        const res = await resposne.json()
        setAlert({isVisible: true, msg: 'event added'})
    }

    return ( 
        <View style={styles.screen}>
            {alert.isVisible && <Text>{alert.msg}</Text>}
            <TextInput 
                value={title}
                onChangeText={setTitle}
                placeholder="title"
                style={styles.input}

            />
            <TextInput 
                value={description}
                onChangeText={setDescription}
                placeholder="description"
                multiline={true}
                style={styles.input}

            />
            <TextInput 
                value={date.toLocaleString()}
                onChangeText={setDate}
                placeholder="date"
                style={styles.input}

            />
            <Button onPress={handAddEvent} title="add" />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
    }
})
 
export default NewEventScreen;