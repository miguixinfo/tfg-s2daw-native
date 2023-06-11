import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ethernetCable2 from '../../../assets/ethernetCable2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import EthernetCableTable from './EthernetCableTable'

const EthernetCableSection = () => {
  const [ethernetCables, setEthernetCables] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/ethernetCables')
      .then((response) => {
        setEthernetCables(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Cables Ethernet</Text>
      <Text style={styles.textCenter}>
        Un cable Ethernet es un cable de red utilizado para la transmisión de datos en redes de área local (LAN). Está compuesto por varios hilos de cobre o fibras ópticas, recubiertos por una cubierta protectora. Los cables Ethernet están diseñados para proporcionar una conexión confiable y de alta velocidad entre dispositivos como computadoras, enrutadores, conmutadores y otros dispositivos de red.
      </Text>
      <Image source={ethernetCable2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={ethernetCables}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: ethernetCable }) => (
          <EthernetCableTable {...ethernetCable} />
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

export default EthernetCableSection
