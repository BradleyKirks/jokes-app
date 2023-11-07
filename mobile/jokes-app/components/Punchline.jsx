import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

export default function Punchline({ Punchline }) {

    const [showPunchline, setShowPunchline] = useState(false)

    useEffect(() => { }, [Punchline])
    return (
        <>
        <TouchableOpacity onPress={() => setShowPunchline(!showPunchline)}>
            <View style={showPunchline ? styles.punchlinebox : styles.punchlineBoxHidden}/>
            <View style={showPunchline ? styles.punchlineText : styles.punchlineTextHidden}/>
            <Text> {showPunchline ? Punchline : 'Show Punchline'} </Text>
        
            </TouchableOpacity>
            </>
    )
}
