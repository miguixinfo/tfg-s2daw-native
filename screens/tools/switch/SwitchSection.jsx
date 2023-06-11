import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import switch2 from '../../../assets/switch2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import SwitchTable from './SwitchTable'

const SwitchSection = () => {
  const [sw, setSw] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/switchs')
      .then((response) => {
        setSw(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Switchs</Text>
      <Text style={styles.textCenter}>
        Un switch, también conocido como conmutador, es un dispositivo fundamental en redes de área local (LAN) que permite la interconexión de dispositivos dentro de una red. Actúa como un punto central para la transferencia de datos entre computadoras, servidores, impresoras y otros dispositivos conectados en la red.
      </Text>
      <Image source={switch2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={sw}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: swc }) => (
          <SwitchTable {...swc} />
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

export default SwitchSection
