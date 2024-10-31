import { type FC } from 'react'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { S } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={S.container} {...rest}>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  )
}
