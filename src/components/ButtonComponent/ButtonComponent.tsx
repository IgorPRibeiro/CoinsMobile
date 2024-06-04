import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextComponent from '../TextComponent/TextComponent'
import styles from './stylesButtonComponent'

interface IButtonComponent {
  title: string
  onPress: () => void
}

const ButtonComponent = ({onPress,title}: IButtonComponent) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <TextComponent 
        text={title}
        type='medium'
      />
    </TouchableOpacity>
  )
}

export default ButtonComponent
