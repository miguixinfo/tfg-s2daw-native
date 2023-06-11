import axios from 'axios'
import React, { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { Text, View, StyleSheet, TouchableHighlight, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const CableTrayTable = (cableTray) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  function deleteCableTray (id) {
    /*
    Alert.alert('¿Estás seguro de que deseas eliminar?', 'No podrás deshacer los cambios', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => axios.delete(`http://localhost:8080/api/deleteCableTrays/${id}`)
      }
    ])
    */
    axios.delete(`http://localhost:8080/api/cableTrays/${id}`)
  }

  const handleLinkPress = (url) => {
    Linking.openURL(url)
  }

  return (
    <ScrollView
      style={styles.border} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.bold}>{cableTray.name}</Text>
        <TouchableHighlight onPress={() => deleteCableTray(cableTray.id)}><Icon name='trash' size={20} /></TouchableHighlight>
      </View>
      <View>
        <Text style={{ flexDirection: 'column' }}>-Description: {cableTray.description}</Text>
      </View>
      <View>
        <Text>-Precio: {cableTray.price}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleLinkPress(cableTray.url)}>
          <Text style={styles.linkText}>-Url: {cableTray.url}</Text>
        </TouchableOpacity>
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
  },
  linkText: {
    color: 'blue'
  }
})

export default CableTrayTable
