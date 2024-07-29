import React from 'react'
import { View, StyleSheet, Text } from "react-native"

const Pegar = ({ nome, idade }) => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>
                Olá, {nome}
            </Text>
            <Text style={styles.text}>
                Sua idade é: {idade} anos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: '#333'
    }
})

export default Pegar