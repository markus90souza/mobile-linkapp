import { Text, TouchableOpacity, View } from 'react-native'
import { S } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
type Props = {
  name: string
  url: string
  onDetails: () => void
}
export function Link({ name, url, onDetails }: Props) {
  return (
    <View style={S.container}>
      <View style={S.details}>
        <Text style={S.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={S.url} numberOfLines={1}>
          {url}
        </Text>
      </View>
      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  )
}
