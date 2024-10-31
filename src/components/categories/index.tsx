import { categories } from '@/utils/categories'
import React, { type FC } from 'react'
import { FlatList } from 'react-native'
import { Category } from '../category'

import { S } from './styles'

type CategoriesProps = {
  selected: string
  onChange: (category: string) => void
}
export const Categories: FC<CategoriesProps> = ({ selected, onChange }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={S.container}
      contentContainerStyle={S.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}
