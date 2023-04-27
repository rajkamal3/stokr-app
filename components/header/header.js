import React, { useState, useContext, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
import StokrContext from '../../context'
import axios from 'axios'
import { alloriginsCorsUrl } from '../../utils/constants'

const Header = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const [headerHeight, setHeaderHeight] = useState(50)

  const inputBoxRef = useRef(null)

  const handleSearchChange = (text) => {
    setSearchValue(text)

    if (text?.length >= 3) {
      axios
        .get(
          `${alloriginsCorsUrl}https://api.tickertape.in/search?text=${text}&types=stock,index,etf,mutualfund,space,profile&pageNumber=0`
        )
        .then((res) => {
          console.log(res?.data?.data?.stocks)
          setSearchResults(res?.data?.data?.stocks)
        })
        .catch((err) => {
          console.log(err)
        })

      // axios
      //   .get(
      //     `${alloriginsCorsUrl}https://www.moneycontrol.com/mccode/common/autosuggestion_solr.php?query=${text}&type=1&format=json`
      //   )
      //   .then((res) => {
      //     console.log(res, 'mc api')
      //   })
    }
  }

  const { value, updateValue } = useContext(StokrContext)

  const search = () => {
    // if (inputBoxRef.current) {
    //   inputBoxRef.current.focus()

    // }
    // Keyboard.emit()

    updateValue('new value')
    setSearchBarOpen(true)
    setHeaderHeight(300)
    console.log(inputBoxRef)
  }

  const closeSearch = () => {
    setSearchBarOpen(false)
    setSearchValue('')
    setSearchResults([])
    setHeaderHeight(50)
  }

  const clearSearch = () => {
    setSearchValue('')
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#150F17',
      height: headerHeight,
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      zIndex: 3
    },
    text: {
      color: '#FFF',
      fontSize: 34
    },
    searchButton: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      marginTop: 0
    },
    closeSearchButton: {
      width: 30,
      height: 30
    },
    clearSearchButton: {
      width: 30,
      height: 30,
      display: 'none'
    },
    searchBox: {
      color: 'white',
      borderColor: 'white',
      borderWidth: 1,
      width: 300,
      paddingLeft: 10
    },
    searchResults: {
      position: 'absolute',
      width: 330,
      backgroundColor: 'red',
      marginTop: 40,
      marginLeft: 15,
      top: 0
    },
    result: {
      height: 30,
      backgroundColor: '#81D4FA',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      verticalAlign: 'middle',
      paddingLeft: 10
    }
  })

  return (
    <View style={styles.container}>
      {!searchBarOpen ? (
        <>
          <Text style={styles.text}>Stokr</Text>

          <TouchableOpacity onPress={search}>
            <Image
              source={require('./../../assets/images/search.png')}
              style={styles.searchButton}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={closeSearch}>
            <Image
              source={require('./../../assets/images/back.png')}
              style={styles.closeSearchButton}
            />
          </TouchableOpacity>

          <TextInput
            onChangeText={handleSearchChange}
            value={searchValue}
            placeholder="Search stocks..."
            placeholderTextColor="rgba(153, 153, 153, 0.5)"
            style={styles.searchBox}
            textAlignVertical="center"
            ref={inputBoxRef}
            autoFocus
            clearButtonMode="always"
          />

          <TouchableOpacity onPress={clearSearch}>
            <Image
              source={require('./../../assets/images/cross.png')}
              style={styles.clearSearchButton}
            />
          </TouchableOpacity>
        </>
      )}
      {searchValue?.length >= 3 && (
        <View style={styles.searchResults}>
          {searchResults.slice(0, 10).map((result) => {
            console.log(result, 'each result in map')
            return (
              <Text
                style={styles.result}
                key={result.sid}>
                {result.name}
              </Text>
            )
          })}
        </View>
      )}
    </View>
  )
}

export default Header
