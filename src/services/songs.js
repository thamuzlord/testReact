const baseUrl = 'https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com'

export async function getSongs(id){
    const response = await fetch(`${baseUrl}/dev/api/albums/${id}/songs`)
    const responseJson = await response.json()
    return responseJson
}

export default {
    getSongs
}