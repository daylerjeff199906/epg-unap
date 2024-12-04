'use server'
import { fetchCore } from './core'
import apiDataUrl from '@/utils/apiUrlData.json'

// export async function fetchLogin(data: FormData) {
//   const path = apiDataUrl.auth.login

//   return await fetchCore(`${path}`, {
//     method: 'POST',
//     body: JSON.stringify(data),
//   })
// }

export const fetchLogin = async (data: {
  username: string
  password: string
}) => {
  const path = apiDataUrl.auth.login

  try {
    const response = await fetchCore(`${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return response.json()
  } catch (error) {
    return error
  }
}
