import {
    StyleSheet,
    View,
    Text,
    Pressable
} from "react-native-web";

const GoalItem = (props) => {
        
    return (
        <View style={styles.goalItem}>
            <Pressable
            android_ripple={{color: '#dddddd'}}
            onPress={props.onDeleteItem.bind(this, props.id)}
            stye={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#2196F3',
    color: 'white'
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
})