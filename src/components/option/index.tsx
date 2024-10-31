import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { S } from './styles'
import { colors } from '@/styles/colors'

import { type FC } from 'react'

type OptionProps = TouchableOpacityProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: 'primary' | 'secondary'
}

export const Option: FC<OptionProps> = ({
  name,
  icon,
  variant = 'primary',
  ...rest
}) => {
  return (
    <TouchableOpacity style={S.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === 'primary' ? colors.green[300] : colors.gray[400]}
      />

      <Text style={variant === 'primary' ? S.primaryTitle : S.secondaryTitle}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}
