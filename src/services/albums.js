const baseUrl = 'https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com'

export async function getAlbums(id){
    const response = await fetch(`${baseUrl}/dev/api/artists/${id}/albums`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getAlbums
}