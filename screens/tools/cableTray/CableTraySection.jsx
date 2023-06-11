import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import cableTray2 from '../../../assets/cableTray2.png'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import CableTrayTable from './CableTrayTable'

const CableTraySection = () => {
  const [cableTrays, setCableTrays] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/cableTrays')
      .then((response) => {
        setCableTrays(response.data)
      })
  }, [])

  return (
    <View>
      <Text style={styles.subtitle}>Bandejas para cables</Text>
      <Text style={styles.textCenter}>
        Las bandejas para cables son componentes esenciales en sistemas de cableado estructurado. Estas estructuras, generalmente hechas de metal o plástico resistente, se instalan en racks o gabinetes y tienen compartimentos para organizar y sostener los cables. Su objetivo principal es mantener los cables ordenados y evitar enredos, lo que mejora la apariencia visual y facilita el acceso para instalación, mantenimiento y reparación. Además, contribuyen a la gestión del flujo de aire y la prevención de problemas relacionados con el sobrecalentamiento.
      </Text>
      <Image source={cableTray2} style={styles.images} />
      <Text style={styles.products}>Productos disponibles</Text>
      <FlatList
        style={styles.container}
        data={cableTrays}
        ItemSeparatorComponents={() => <Text> </Text>}
        renderItem={({ item: cableTray }) => (
          <CableTrayTable {...cableTray} />
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

export default CableTraySection
