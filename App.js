import React, { useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  StatusBar
} from 'react-native'
import Header from './components/header/header'
import Screener from './components/screener/screener'
import { nifty50 } from './data'

const styles = StyleSheet.create({
  container: {},
  statusBar: {},
  mainContent: {},
  header: {}
})

const App = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const companyCode = []

  nifty50.forEach(function (o) {
    Object.keys(o).forEach(function (prop) {
      if (companyCode.indexOf(prop) < 0) companyCode.push(prop)
    })
  })

  const refreshApp = () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  return (
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
        <Header style={styles.header} />

        {companyCode.map((code) => {
          return (
            <Screener
              code={code}
              key={code}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default App
