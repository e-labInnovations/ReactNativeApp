import {
    StyleSheet,
    View,
    Text,
    Pressable
} from "react-native-web";

const GoalItem = (props) => {
        
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#2196F3',
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
})