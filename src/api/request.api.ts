import { IRequest } from './request.types'

export const request = ({ url, method, body }: IRequest) => {
  const fetchParams: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (method === 'POST') {
    Object.assign(fetchParams, {
      body: JSON.stringify(body),
    })
  }

  return fetch(process.env.REACT_APP_API + url, fetchParams)
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        throw new Error(data.err)
      }
      return data
    })
}
