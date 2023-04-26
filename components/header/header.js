import React, { useState, useContext } from 'react'
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

const Header = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearchChange = (text) => {
    setSearchValue(text)

    if (text?.length >= 3) {
      axios
        .get(
          `https://api.allorigins.win/raw?url=https://api.tickertape.in/search?text=${text}&types=stock,index,etf,mutualfund,space,profile&pageNumber=0`
        )
        .then((res) => {
          console.log(res?.data?.data?.stocks)
          setSearchResults(res?.data?.data?.stocks)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const { value, updateValue } = useContext(StokrContext)

  const search = () => {
    updateValue('new value')
    setSearchBarOpen(true)
  }

  const closeSearch = () => {
    setSearchBarOpen(false)
    setSearchValue('')
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#150F17',
      height: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15
    },
    text: {
      color: '#FFF',
      fontSize: 34
    },
    searchButton: {
      width: 25,
      resizeMode: 'contain'
    },
    searchBox: {
      color: 'white',
      borderColor: 'white',
      borderWidth: 1,
      width: 330,
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
          <TextInput
            onChangeText={handleSearchChange}
            value={searchValue}
            placeholder="Search stocks..."
            placeholderTextColor="rgba(153, 153, 153, 0.5)"
            style={styles.searchBox}
            textAlignVertical="center"
          />

          <TouchableOpacity onPress={closeSearch}>
            <Image
              source={require('./../../assets/images/cross.png')}
              style={styles.searchButton}
            />
          </TouchableOpacity>
        </>
      )}
      {searchResults?.length > 0 && (
        <View>
          {searchResults.slice(0, 5).map((result) => {
            console.log(result, 'each result in map')
            return <Text key={result.sid}>{result.name}</Text>
          })}
        </View>
      )}
    </View>
  )
}

export default Header
