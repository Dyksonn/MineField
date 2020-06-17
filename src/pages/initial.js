import React, {useEffect, useRef} from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import Boom from '../images/bomba.png'

export default function Initial() {
    const navigation = useNavigation()

    const right = useRef(new Animated.Value(32)).current
    const top = useRef(new Animated.Value(50)).current
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.parallel([
            Animated.timing(top, {
                toValue: 0,
                duration: 1000
            }),
            Animated.timing(right, {
                toValue: 0,
                duration: 2000
            }),
            Animated.spring(opacity, {
                toValue: 1,
                bounciness: 10,
                velocity: 0.5
                
            })
        ]).start()
    }, [])

    return (
        <View style={{flex: 1, alignItems: "center", backgroundColor: '#999', borderWidth: 25, borderLeftColor: '#CCC', borderTopColor: '#CCC', borderRightColor: '#333', borderBottomColor: '#333'}}>
            <View style={{margin: 40}}>
                <Image source={Boom} resizeMode="contain" style={{width: 145, height: 145}} />
            </View>
            <View style={{marginTop: 10}}>
                <Animated.Text style={{fontSize: 16, fontFamily: 'Roboto_300Light_Italic', opacity: opacity }}>Campo minado diversão garantida!!!</Animated.Text>
            </View>
            <Animated.View style={{marginTop: 100, position: 'relative', top: top}}>
                <RectButton onPress={() => navigation.navigate('Jogo')} style={{flexDirection: 'row', alignItems: "center", backgroundColor: 'rgb(3, 179, 11)', borderRadius: 10, width: 110, height: 35}}>
                    <Animated.View style={{position: 'relative', right: right,backgroundColor: 'rgba(114, 216, 120, 0.8)', alignItems: "center", justifyContent :"center", height: 35, width: 30, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                        <AntDesign name="arrowright" size={20} color="#FFF" />
                    </Animated.View>
                    <Text style={{marginLeft: 10, fontSize: 16, fontFamily: 'OpenSans_400Regular', color: '#FFF'}}>Jogar</Text>
                </RectButton>
            </Animated.View>
        </View>
    )
}