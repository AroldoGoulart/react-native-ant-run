import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStoredItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
};

export const storeItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

export const removeAllItems = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
};
