import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import keystoneJack2 from '../../../assets/keystoneJack2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import KeystoneJackTable from './KeystoneJackTable'

const KeystoneJackSection = () => {
  const [keystoneJacks, setKeystoneJacks] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/keystoneJacks')
      .then((response) => {
        setKeystoneJacks(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Keystone Jacks</Text>
      <Text style={styles.textCenter}>
        Un keystone jack, también conocido como conector keystone, es un componente modular utilizado en sistemas de cableado estructurado para redes de comunicación. Se trata de un conector hembra montado en una carcasa de plástico que se inserta en un panel de conexiones.
      </Text>
      <Image source={keystoneJack2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={keystoneJacks}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: keystoneJack }) => (
          <KeystoneJackTable {...keystoneJack} />
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

export default KeystoneJackSection
