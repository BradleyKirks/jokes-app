import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
container: {

},
bigText: {

},
punchlinebox: {
backgroundColor: '#00d', 
width: '100vw',
height: 104, 
justifyContent: 'space-around',
alignItems: 'center',
fontSize: 30, 
},

punchlineTextHidden: {
color: '#00d' 
},

punchlinebox: {
backgroundColor: '#00d', 
width: '100vw',
height: 104, 
justifyContent: 'center',
alignItems: 'center',
fontSize: 30, 
},

punchlineTextHidden: {
color: 'white',
}
}
)

export default styles