import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image 
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import Task from './src/Task';
 
export default function App() {
  const [task, setTask] = useState('');

  const [list, setList] = useState([]);

  function handleAdd(){
    if(task === '') {
      return;
    }

    const data = {
      key: Date.now(),
      item: task
    } 

    setList(oldArray => [data, ...oldArray]);

    setTask('');
  }

  function handleDelete(item) {
    let filterItem = list.filter((task) => {
      return (task.item !== item)
    });

    setList(filterItem);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('./images/logo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Tarefas</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite sua tarefa..."
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name='plus' size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>

      {/* Conditionally render the FlatList or the message */}
      {list.length === 0 ? (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>Nenhuma tarefa adicionada</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => item.key.toString()}
          renderItem={({ item }) => (
            <Task data={item} deleteItem={() => handleDelete(item.item)} />
          )}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#fff',
  },
  image: {
    width: 52,
    height: 52,
    marginRight: 4,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#fbfbfb',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: 'green',
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%',
  },
  // Style for the empty message container
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Keep the same background color as the main container
  },
  emptyListText: {
    fontSize: 18,
    color: '#22272e',
  },
});