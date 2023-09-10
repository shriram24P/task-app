import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  //handle input values
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };

  // add to list
  const handleAddTask = () => {
    setTaskList((prevTask) => [...prevTask, task]);
    alert("Task Added");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputValue}
          style={styles.inputBox}
          placeholder="Add your Tasks"
        />
        <Button onPress={handleAddTask} title="Add Task" />
      </View>
      <View>
        <Text style={styles.border}></Text>
        <Text style={styles.textTitle}>Your Tasks :</Text>
        <ScrollView>
          <View>
            {taskList?.map((taskItem, index) => (
              <Text style={styles.taskItem} key={index}>
                {taskItem}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 15,
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    color: "#7393B3",
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
    opacity: 0.3,
  },
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#77dd77",
    color: "white",
    textAlign: "center",
  },
});

export default Tasks;
