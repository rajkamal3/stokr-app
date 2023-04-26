import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

function Screener({ code, width }) {
  const [marketData, setMarketData] = useState([])

  useEffect(() => {
    axios
      .get(`https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/${code}`)
      .then((res) => {
        setMarketData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setMarketData])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      padding: 5
    },

    flexParent: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    flexChildren: {
      width: width * 0.25
    },
    boldText: {
      fontWeight: 'bold'
    },
    flexChildrenContent: {
      width: width * 0.75
    },
    button: {
      width: 100,
      height: 30,
      backgroundColor: 'red'
    }
  })

  const findDifferenceFrom52WLow = (currentPrice, _52WLow) => {
    const priceDifference = currentPrice - _52WLow
    const percentage = ((priceDifference / currentPrice) * 100).toFixed(2)

    return percentage
  }

  return (
    <ScrollView style={styles.container}>
      <Text>
        <View style={styles.flexParent}>
          <View style={styles.flexChildren}>
            <Text style={styles.boldText}>Stock</Text>
          </View>
          <View style={styles.flexChildrenContent}>
            <Text>{marketData?.data?.SC_FULLNM}</Text>
          </View>
        </View>
      </Text>

      <Text>
        <View style={styles.flexParent}>
          <View style={styles.flexChildren}>
            <Text style={styles.boldText}>Current Price</Text>
          </View>
          <View style={styles.flexChildrenContent}>
            <Text>{marketData?.data?.pricecurrent}</Text>
          </View>
        </View>
      </Text>

      <Text>
        <View style={styles.flexParent}>
          <View style={styles.flexChildren}>
            <Text style={styles.boldText}>52W Low</Text>
          </View>
          <View style={styles.flexChildrenContent}>
            <Text>{marketData?.data?.['52L']}</Text>
          </View>
        </View>
      </Text>

      <Text>
        <View style={styles.flexParent}>
          <View style={styles.flexChildren}>
            <Text style={styles.boldText}>52W High</Text>
          </View>
          <View style={styles.flexChildrenContent}>
            <Text>{marketData?.data?.['52H']}</Text>
          </View>
        </View>
      </Text>

      <Text>
        <View style={styles.flexParent}>
          <View style={styles.flexChildren}>
            <Text style={styles.boldText}>52W Low Close</Text>
          </View>
          <View style={styles.flexChildrenContent}>
            <Text>
              {findDifferenceFrom52WLow(
                marketData?.data?.pricecurrent,
                marketData?.data?.['52L']
              )}
              %
            </Text>
          </View>
        </View>
      </Text>
    </ScrollView>
  )
}

export default Screener
