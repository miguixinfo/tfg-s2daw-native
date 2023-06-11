import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import users from '../../assets/users.png'
import servers from '../../assets/servidores.jpg'

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    slide1,
    slide2,
    slide3
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length())
    }, 10000000000)

    return () => {
      clearInterval(interval)
    }
  }, [images])

  return (
    <>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Página de Inicio</Text>
        </View>
        <FlatList
          horizontal
          style={styles.height}
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={{ width: 500, height: 200 }} />
          )}
          initialScrollIndex={currentImageIndex}
          getItemLayout={(data, index) => ({
            length: 300,
            offset: 300 * index,
            index
          })}
          pagingEnabled
        />
        <View>
          <Text style={styles.subtitle}>¿Quiénes somos?</Text>
          <Text style={styles.textCenter}>
            Soy un alumno de un instituto de Toledo llamado I.E.S Azarquiel. Estoy terminando un ciclo superior de
            Desarrollo de Aplicaciones Web (DAW). Este instituto se compone de un total de 44 aulas, 6 laboratorios y un gimnasio. Este proyecto viene
            impulsado por la necesidad de facilitar la instalación del sistema de red Wi-Fi del centro, pues para un espacio tan grande puede llegar
            a ser tedioso. El fin de la página es facilitar la vida a los técnicos en la búsqueda de información sobre los componentes y dispositivos
            a utilizar en su trabajo.
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Funcionalidades de la aplicación</Text>
          <Image source={users} style={styles.images} />
          <Text style={styles.subtitle2}>Gestión de usuarios</Text>
          <Text style={styles.textCenter}>En esta sección se podrá hacer un seguimiento de los usuarios registrados en nuestra web. Accede a esta sección mediante el menú de navegación</Text>
          <Image source={servers} style={styles.images} />
          <Text style={styles.subtitle2}>Herramientas</Text>
          <Text style={styles.textCenter}>En este apartado será posible ver y gestionar las herramientas disponibles para la instalación
            del sistema de red. Accede a esta sección mediante el menú de navegación.
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: 'center'
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
  },
  height: {
    maxHeight: 200
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
    borderRadius: 4
  },
  subtitle2: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20
  }
})

export default HomeScreen
