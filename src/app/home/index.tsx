/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '@/components/header'
import { useCallback, useState, type FC } from 'react'
import {
  SafeAreaView,
  FlatList,
  Modal,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Linking,
} from 'react-native'
import { S } from './styles'

import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Option } from '@/components/option'
import { categories } from '@/utils/categories'
import { linkStorage, type LinkStorage } from '@/storage/link-storage'
import { useFocusEffect } from 'expo-router'

const Home: FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [category, setCategory] = useState(categories[0].name)

  const [links, setLinks] = useState<LinkStorage[]>([])
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage)
  const handleDetails = (selected: LinkStorage) => {
    setShowModal(true)
    setLink(selected)
  }

  const handleDelete = async () => {
    Alert.alert('Excluir', 'Deseja excluir o link?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        onPress: async () => {
          await linkStorage.removeLink(link.id)
          setShowModal(false)
          getLinks()
        },
      },
    ])
  }

  const handleOpenLink = async () => {
    try {
      await Linking.canOpenURL(link.url)
      await Linking.openURL(link.url)
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao abrir o link')
    }
  }
  const getLinks = async () => {
    try {
      const data = await linkStorage.getLinks()

      const filtered = data.filter((item) => item.category === category)

      setLinks(filtered)
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao buscar os links')
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks()
    }, [category]),
  )

  return (
    <SafeAreaView style={S.container}>
      <Header />

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={S.links}
        contentContainerStyle={S.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={S.modal}>
          <View style={S.modalContent}>
            <View style={S.modalHeader}>
              <Text style={S.modalCategory}>{link.category}</Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={S.modalLinkName}>{link.name}</Text>

            <Text style={S.modalUrl}>{link.url}</Text>

            <View style={S.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleDelete}
              />
              <Option name="Abrir" icon="language" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Home
