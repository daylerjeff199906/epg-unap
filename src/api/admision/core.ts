"use server";
const isProduction = process.env.NODE_ENV === 'production'
// const urlProd = process.env.API_URL_PROD
const urlProd = 'https://epg-unap.vercel.app/'
// const urlLocal = process.env.API_URL_LOCAL
const urlLocal = 'http://192.168.16.184:8000/api/'
const appName = process.env.APP_NAME

const urlBase = isProduction ? urlProd : urlLocal

export async function fetchCore(path: string, options: RequestInit) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('token')}` || ''
  }

  if (appName) {
    headers['app-name'] = appName
  }

  const newOptions = {
    ...options,
    headers: { ...headers, ...(options?.headers || {}) },
  }

  const url = `${urlBase}${path}`
  return fetch(url, newOptions)
}
