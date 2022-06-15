import { StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }
  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    if(enteredGoalText)
      setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, key: Math.random().toString()}])
      endAddGoalHandler()
  }

  const deleteGoal = (key) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== key)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#2196F3' onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goals.reverse()} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoal} />
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
