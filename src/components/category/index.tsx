import { type FC } from 'react'
import { Pressable, Text, type PressableProps } from 'react-native'

import { S } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

type CategoryProps = PressableProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  isSelected: boolean
}

export const Category: FC<CategoryProps> = ({
  name,
  icon,
  isSelected,
  ...rest
}) => {
  const color = isSelected ? colors.green[300] : colors.gray[400]
  return (
    <Pressable style={S.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[S.name, { color }]}>{name}</Text>
    </Pressable>
  )
}
