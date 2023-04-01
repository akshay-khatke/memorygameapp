import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type CardProp = {
  card: any;
  key: any;
  handleClick: (card: any) => void;
  flipped: boolean
}

const { width, height } = Dimensions.get("window")
const GameCard: React.FC<CardProp> = ({ card, key, handleClick, flipped }) => {
  const onChange = () => {
    handleClick(card)
  }

  return (
    <TouchableOpacity onPress={onChange} style={styles.container} >
      <View style={[flipped ? {
        transform: [{ skewY: '90deg' }]
      } : {
        transform: [{ skewY: '0deg' }]
      }]}>
        <Text style={{ padding: 10, fontSize: 24, fontWeight: 'bold', position: 'absolute' }}>{card.char}</Text>
        <Image
          style={styles.image}
          source={require('../asset/images/cover.png')} />

      </View>
    </TouchableOpacity>
  )

}

export default GameCard;

const styles = StyleSheet.create({

  container: {
    flex: 1, margin: 10, backgroundColor: "red",


  }, image: { transform: [{ skewY: '0deg' }], height: height / 14, width: "100%", alignSelf: 'center' },


})