import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GameCard } from '../components';
import { CARDITEM } from '../constant/list';


const GameDashboard=()=>{

  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState<Array<any>>([])

  useEffect(() => {

    if (choiceOne && choiceTwo) {
      if (choiceOne.char === choiceTwo.char) {
        setCards((prevState) => prevState.map(card => {
          if (card.char === choiceOne.char) {
            return { ...card, matched: true }
          } else {
            return card
          }
        }))
        console.log("card match")
        resetTurn()
      } else {
        console.log("card not match")
       setTimeout(()=> resetTurn(),1000)

      }
    }

  }, [choiceOne, choiceTwo])

  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  

  const cardShuffle = () => {

    const shuffleCards = [...CARDITEM, ...CARDITEM]
      .sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffleCards);
    setTurns(0)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null);
    setTurns(prevState => prevState + 1)
  }


    return (
   <View style={styles.container}>
      <TouchableOpacity onPress={cardShuffle} style={{ paddingVertical: 10,backgroundColor:"yellow"}}>
        
        <Text style={{padding:10}} >Start Game</Text>
      </TouchableOpacity>
      <View style={styles.cards}>
        <FlatList
          data={cards}
          numColumns={4}
          renderItem={({ item, index }: { item: any, index: any }) => {
            return <GameCard key={item.id} card={item} handleClick={handleChoice} flipped={choiceOne === cards || choiceTwo === cards || item.matched} />
          }}
        />
      </View>

  
        </View>
    )

}

export default GameDashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
    cards: {
  
    },
  });