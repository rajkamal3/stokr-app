import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  StatusBar,
  Dimensions,
  Text,
  Button
} from 'react-native'
import Header from './components/header/header'
import Screener from './components/screener/screener'
import StokrContext from './context'
import { nifty50 } from './data'
import axios from 'axios'

const { width } = Dimensions.get('window')

const App = () => {
  // App state
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Context
  const [value, setValue] = useState('initial value')

  const updateValue = (newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    axios
      .get(
        'https://api.allorigins.win/raw?url=https://api.tickertape.in/search?text=relia&types=stock,index,etf,mutualfund,space,profile&pageNumber=0'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const companyCode = []

  nifty50.forEach(function (o) {
    Object.keys(o).forEach(function (prop) {
      if (companyCode.indexOf(prop) < 0) {
        companyCode.push(prop)
      }
    })
  })

  const refreshApp = () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  const styles = StyleSheet.create({
    container: {},
    statusBar: {},
    mainContent: {},
    header: {}
  })

  return (
    <StokrContext.Provider value={{ value, updateValue }}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            onRefresh={refreshApp}
            refreshing={isRefreshing}
          />
        }>
        <StatusBar />
        <View style={styles.mainContent}>
          <Text>{value}</Text>

          <Header style={styles.header} />

          {companyCode.map((code) => {
            return (
              <Screener
                code={code}
                key={code}
                width={width}
              />
            )
          })}
        </View>
      </ScrollView>
    </StokrContext.Provider>
  )
}

export default App
