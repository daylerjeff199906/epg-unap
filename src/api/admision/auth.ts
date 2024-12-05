'use server'
import { fetchCore } from './core'
import apiDataUrl from '@/utils/apiUrlData.json'

export interface LoginResponse {
  user_token: string
  person_token: string
  first_name: string
  last_name: string
  email: string
  refresh_token: string
  access_token: string
}

export const fetchLogin = async (data: {
  username: string
  password: string
}): Promise<{ status: number; data?: LoginResponse; errors?: string[] }> => {
  const path = apiDataUrl.auth.login

  try {
    const response = await fetchCore(`${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      // Si el estado no es exitoso, parseamos el error
      const errorResponse = await response.json()
      return {
        status: response.status,
        errors: errorResponse.errors || ['Error desconocido.'],
      }
    }

    // Si el estado es exitoso, parseamos los datos
    const responseData: LoginResponse = await response.json()
    return {
      status: response.status,
      data: responseData,
    }
  } catch (error) {
    console.error('Error al realizar la petición:', error)
    return {
      status: 500,
      errors: ['Error al conectar con el servidor.'],
    }
  }
}
