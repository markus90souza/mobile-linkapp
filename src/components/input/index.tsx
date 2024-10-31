import { type FC } from 'react'
import { TextInput, type TextInputProps } from 'react-native'

import { S } from './styles'
import { colors } from '@/styles/colors'

type InputProps = TextInputProps

export const Input: FC<InputProps> = ({ ...rest }) => {
  return (
    <TextInput
      placeholderTextColor={colors.gray[300]}
      style={S.container}
      {...rest}
    />
  )
}
