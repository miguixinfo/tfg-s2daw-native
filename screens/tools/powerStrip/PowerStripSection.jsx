import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import powerStrip2 from '../../../assets/powerStrip2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import PowerStripTable from './PowerStripTable'

const PowerStripSection = () => {
  const [powerStrips, setPowerStrips] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/powerStrips')
      .then((response) => {
        setPowerStrips(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Power Strips (Regleta)</Text>
      <Text style={styles.textCenter}>
        Un Power Strip, también conocido como regleta eléctrica, es un dispositivo que proporciona múltiples tomas de corriente eléctrica en un solo enchufe. Está diseñado para ampliar la capacidad de conexiones eléctricas disponibles en un área determinada.
      </Text>
      <Image source={powerStrip2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={powerStrips}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: powerStrip }) => (
          <PowerStripTable {...powerStrip} />
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

export default PowerStripSection
