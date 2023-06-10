import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import patchPanel2 from '../../../assets/patchPanel2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import PatchPanelTable from './PatchPanelTable'

const PatchPanelSection = () => {
  const [patchPanels, setPatchPanels] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/patchPanels')
      .then((response) => {
        setPatchPanels(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Patch Panels</Text>
      <Text style={styles.textCenter}>
        Un Patch Panel, también conocido como panel de conexiones, es un componente utilizado en sistemas de cableado estructurado para redes de comunicación. Consiste en una estructura con múltiples puertos o conectores donde se pueden conectar y organizar los cables de red.
      </Text>
      <Image source={patchPanel2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={patchPanels}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: patchPanel }) => (
          <PatchPanelTable {...patchPanel} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 20
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  textCenter: {
    textAlign: 'center',
    marginHorizontal: 25,
    marginBottom: 8
  },
  images: {
    width: 500,
    height: 300,
    flexDirection: 'column',
    borderRadius: 4,
    maxHeight: 180
  },
  products: {
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10
  }
})

export default PatchPanelSection
