import { StyleSheet,
  View,
  FlatList
} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])

  const addGoalHandler = (enteredGoalText) => {
    if(enteredGoalText)
      setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, key: Math.random().toString()}])
  }

  const deleteGoal = () => {
    console.log('Delete');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goals.reverse()} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoal} />
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
  goalsContainer: {
    flex: 3
  },
});
