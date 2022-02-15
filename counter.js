import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {store} from './store';
import {Increment, Decrement, Reset} from './actions';
const Counter = () => {
  const [count, changeCount] = useState(0);
  // console.log('state is ', store.getState().counter);
  store.subscribe(() => {
    console.log('store changed', store.getState());
  });
  const increment = () => {
    // changeCount(count + 1);
    store.dispatch(Increment(store.getState().counter + 1));
    changeCount(store.getState().counter);
    //  console.log(count);
  };
  const decrement = () => {
    //changeCount(count - 1);
    store.dispatch(Decrement(store.getState().counter - 1));
    changeCount(store.getState().counter);

    // console.log(count);
  };
  const reset = () => {
    // changeCount(0);
    store.dispatch(Reset(0));
    changeCount(store.getState().counter);

    //  console.log(count);
  };

  return (
    <View style={{alignContent: 'center'}}>
      <Text style={styles.button}>{count}</Text>
      <Button
        style={styles.button}
        onPress={increment}
        title="Increment"></Button>
      <Button
        onPress={decrement}
        title="decrement"
        style={styles.button}></Button>
      <Button style={styles.button} onPress={reset} title="Reset"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignSelf: 'center',
    marginVertical: 50,
  },
});

export default Counter;
