import { type FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import { S } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { useRouter } from 'expo-router'
export const Header: FC = () => {
  const { navigate } = useRouter()
  return (
    <View>
      <View style={S.header}>
        <Image source={require('@/assets/logo.png')} alt="" />
        <TouchableOpacity onPress={() => navigate('/add')}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
