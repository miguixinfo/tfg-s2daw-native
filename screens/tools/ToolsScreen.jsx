import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CableTraySection from './cableTray/CableTraySection'
import EthernetCableSection from './ethernetCable/EthernetCableSection'
import KeystoneJackSection from './keystoneJack/KeystoneJackSection'
import NetworkCardSection from './networkCard/NetworkCardSection'
import PatchPanelSection from './patchPanel/PatchPanelSection'
import PowerStripSection from './powerStrip/PowerStripSection'
import SwitchSection from './switch/SwitchSection'

const ToolsScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Herramientas</Text>
        </View>
        <CableTraySection />
        <EthernetCableSection />
        <KeystoneJackSection />
        <NetworkCardSection />
        <PatchPanelSection />
        <PowerStripSection />
        <SwitchSection />
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
  }
})

export default ToolsScreen
