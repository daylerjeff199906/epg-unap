'use server'
import { fetchCore } from './core'
import apiDataUrl from '@/utils/apiUrlData.json'

export async function fetchLogin(data: { username: string; password: string }) {
  const path = apiDataUrl.auth.login

  return fetchCore(`${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
