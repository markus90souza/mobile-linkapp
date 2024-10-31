import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

import { S } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { useRouter } from 'expo-router'
import { Categories } from '@/components/categories'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { linkStorage } from '@/storage/link-storage'
const Add: React.FC = () => {
  const router = useRouter()

  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const handleAdd = async () => {
    try {
      if (!category) {
        return Alert.alert('Categoria', 'Selecione uma categoria')
      }

      if (!name.trim()) {
        return Alert.alert('Nome', 'Informe o nome do link')
      }

      if (!url.trim()) {
        return Alert.alert('Url', 'Informe a url do link')
      }

      await linkStorage.saveLinks({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      })

      Alert.alert('Link salvo', 'Link salvo com sucesso', [
        {
          text: 'OK',
          onPress: () => router.canGoBack(),
        },
      ])
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao adicionar o link')
    }
  }
  return (
    <View style={S.container}>
      <View style={S.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={S.title}>Novo</Text>
      </View>

      <Text style={S.label}>Selecione uma categoria</Text>

      <Categories selected={category} onChange={setCategory} />

      <View style={S.form}>
        <Input autoCorrect={false} placeholder="Nome" onChangeText={setName} />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="url"
          onChangeText={setUrl}
        />

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}

export default Add
