import { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from "react-native-web";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})