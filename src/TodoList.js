import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as TodoActions from 'store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  todoContainer: {
    flexDirection: 'row',
  },
});

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View style={styles.container}>
    {
      todos.map(todo => (
        <View key={todo.id} style={styles.todoContainer}>
          <Text>{todo.text}</Text>
          <TouchableOpacity onPress={() => { removeTodo(todo.id); }}>
            <Text>deletar</Text>
          </TouchableOpacity>
        </View>
      ))
    }

    <TouchableOpacity onPress={() => { addTodo('foo'); }}>
      <Text>Adicionar todo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
