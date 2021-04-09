import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

export default CounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{count}</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.pressable}
          onPress={() => dispatch(increment())}
        >
          <Text>Increment</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => dispatch(decrement())}
        >
          <Text>Decrement</Text>
        </Pressable>
      </View>
      <Pressable style={styles.pressable} onPress={() => dispatch(reset())}>
        <Text>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 57,
  },
  btnContainer: {
    flexDirection: "row",
  },
  pressable: {
    height: 40,
    width: 150,
    backgroundColor: "#AAA",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
  },
});
