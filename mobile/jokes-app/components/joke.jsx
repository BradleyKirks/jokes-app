import { View, Text } from 'react-native'
import styles  from "../styles"

export default function joke ({ joke }) {
return (
 <>
    <View>
        <Text style={styles.bigText}>{joke}</Text>
    </View>
 </>
)
}