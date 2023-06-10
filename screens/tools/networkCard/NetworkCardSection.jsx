import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import networkCard2 from '../../../assets/networkCard2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import NetworkCardTable from './NetworkCardTable'

const NetworkCardSection = () => {
  const [networkCards, setNetworkCards] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/networkCards')
      .then((response) => {
        setNetworkCards(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Tarjetas de Red</Text>
      <Text style={styles.textCenter}>
        Una tarjeta de red, también conocida como tarjeta de interfaz de red (NIC, por sus siglas en inglés, Network Interface Card), es un componente de hardware esencial para permitir que una computadora se conecte a una red. La tarjeta de red se instala en la computadora y proporciona una interfaz para la conexión física y la comunicación de datos con otros dispositivos en la red, como servidores, enrutadores o impresoras.
      </Text>
      <Image source={networkCard2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={networkCards}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: networkCard }) => (
          <NetworkCardTable {...networkCard} />
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

export default NetworkCardSection
