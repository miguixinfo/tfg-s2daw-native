import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, FlatList, StyleSheet, View } from 'react-native'
import UsersTable from './UsersTable.jsx'

const UsersScreen = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then((response) => {
        setUsers(response.data)
      })
  }, [])

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Gestión de usuarios</Text>
      </View>
      <FlatList
        style={styles.container}
        data={users}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: user }) => (
          <UsersTable {...user} />
        )}
      />
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 20
  },
  title: {
    margin: 20,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'fantasy'
  },
  header: {
    backgroundColor: '#0C9CF2'
  }
})

export default UsersScreen
