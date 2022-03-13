import { request } from '../api/request.api'

class AuthService {
  auth = (name: string, password: string) => {
    return request({ url: '/auth', method: 'POST', body: { name, password } })
  }
}

export const authService = new AuthService()
