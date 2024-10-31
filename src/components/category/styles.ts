import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[400],
  },
})
