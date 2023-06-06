import AsyncStorage from '@react-native-async-storage/async-storage';

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

type responseMultiGet = AsyncReturnType<typeof AsyncStorage.multiGet>;

const storeStringData = async (
  storageKey: string,
  value: string,
): Promise<{error?: boolean; msg: string}> => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
    return {msg: 'Saving successful'};
  } catch (error) {
    return {error: true, msg: 'Saving failed'};
  }
};

const getStringValue = async (storageKey: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    return value;
  } catch (error) {
    return null;
  }
};

const getObjectValue = async <T>(storageKey: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    return null;
  }
};

const updateObjectData = async <T>(
  storageKey: string,
  value: T,
): Promise<{error?: boolean; msg: string; data?: T | string | null}> => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.mergeItem(storageKey, jsonValue);

    const newData: string | Awaited<T> | null =
      typeof value === 'string'
        ? await getStringValue(storageKey)
        : await getObjectValue<T>(storageKey);

    return {msg: 'Updating successful', data: newData};
  } catch (error) {
    return {error: true, msg: 'Updating failed'};
  }
};

const removeData = async (
  storageKey: string,
): Promise<{msg: string; error?: boolean}> => {
  try {
    await AsyncStorage.removeItem(storageKey);
    return {msg: 'Removing successful'};
  } catch (error) {
    return {error: true, msg: 'Removing failed'};
  }
};

const multiGetData = async (
  storageKeys: string[],
): Promise<{msg: string; error?: boolean; value?: responseMultiGet}> => {
  try {
    const valuesArray = await AsyncStorage.multiGet(storageKeys);
    return {msg: 'Multi getting successful', value: valuesArray};
  } catch (error) {
    return {error: true, msg: 'Multi getting failed'};
  }
};

const LocalStorage = {
  storeStringData,
  getStringValue,
  getObjectValue,
  updateObjectData,
  removeData,
  multiGetData,
};

export default LocalStorage;
