import { View } from "react-native";

const FlexBox = () => {
    return (
        <View style = {{
            backgroundColor: 'cyan',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: 100,
                height: 100,
            }}/>
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100
            }}/>
            <View style={{
                backgroundColor: 'yellow',
                width: 100,
                height: 100
            }}/>
            <View style={{
                backgroundColor: 'gray',
                width: 100,
                height: 100
            }}/>
            <View style={{
                backgroundColor: 'greenyellow',
                width: 100,
                height: 100
            }}/>
        </View>
    )
}

export default FlexBox;