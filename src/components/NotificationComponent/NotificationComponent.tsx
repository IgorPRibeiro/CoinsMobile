import { View, Text } from 'react-native'
import React from 'react'
import styles from './styleNotificationComponent'

interface INotificationComponent {
  title: string
}

const NotificationComponent = ({title}: INotificationComponent) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>O <Text style={styles.titleContent}>{title}</Text> está à caminho! 🥳</Text>
      <Text style={styles.subtitle}>🎁 Parabéns, sua compra foi confirmada!</Text>
    </View>
  )
}

export default NotificationComponent