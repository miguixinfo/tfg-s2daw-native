import axios from 'axios'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

const UsersTable = (user) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  function deleteUser (id) {
    /*
    Alert.alert('¿Estás seguro de que deseas eliminar?', 'No podrás deshacer los cambios', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => axios.delete(`http://localhost:8080/api/users/${id}`)
      }
    ])
    */
    axios.delete(`http://localhost:8080/api/users/${id}`)
  }

  return (
    <ScrollView
      style={styles.border} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.bold}>{user.name}</Text>
        <TouchableHighlight onPress={() => deleteUser(user.id)}><Icon name='trash' size={20} /></TouchableHighlight>
      </View>
      <View>
        <Text style={{ flexDirection: 'column' }}>{user.email}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: '#0C9CF2'
  },
  styledText: {
    fontFamily: 'Impact'
  },
  bold: {
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  icon: {
    alignSelf: 'flex-end'
  }
})

export default UsersTable
