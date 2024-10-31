import AsyncStorage from '@react-native-async-storage/async-storage'

const LINKS_STORAGE = '@linksApp:links'

export type LinkStorage = {
  id: string
  name: string
  url: string
  category: string
}

async function getLinks(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE)
  const parsedLinks = storage ? JSON.parse(storage) : []
  return parsedLinks as LinkStorage[]
}

async function saveLinks(link: LinkStorage) {
  try {
    const storage = await getLinks()
    const newStorage = [...storage, link]
    await AsyncStorage.setItem(LINKS_STORAGE, JSON.stringify(newStorage))
  } catch (error) {}
}

async function removeLink(id: string) {
  try {
    const storage = await getLinks()
    const updatedStorage = storage.filter((link) => link.id !== id)
    await AsyncStorage.setItem(LINKS_STORAGE, JSON.stringify(updatedStorage))
  } catch (error) {}
}

export const linkStorage = { getLinks, saveLinks, removeLink }
