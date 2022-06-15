import { StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, key: Math.random().toString()}])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals.reverse()} renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,  
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 3
  },
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
});
