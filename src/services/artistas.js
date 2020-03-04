const baseUrl = 'https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com'

export async function getArtistas(){
    const response = await fetch(`${baseUrl}/dev/api/artists`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getArtistas
}