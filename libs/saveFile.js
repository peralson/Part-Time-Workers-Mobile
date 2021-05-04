import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export const saveFile = async (fileUri, fileName) => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
    console.log(fileName);
    if (status === "granted") {
        FileSystem.downloadAsync(fileUri, FileSystem.documentDirectory + `${fileName}.pdf`)
            .then(async res => await MediaLibrary.createAssetAsync(res.uri))
            .catch(err => console.log(err.message))
    }
}