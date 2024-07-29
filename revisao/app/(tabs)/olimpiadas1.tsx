import React from 'react'
import { View, StyleSheet, Text } from "react-native"

const Olimpiadas1 = ({ nome, quantidade, ouro, prata, bronze  }) => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>
                Pais, {nome}
            </Text>
            <Text style={styles.text}>
                A quantidade total de medalha atual é: {quantidade}!
            </Text>
            <Text style={styles.text}>
                Sendo {ouro} ouro, {prata} prata e {bronze} bronze
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

export default Olimpiadas1