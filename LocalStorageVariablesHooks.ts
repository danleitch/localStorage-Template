import { SignInData } from '../../store/auth/helpers'

class LocalStorageVariables {
  private static key = 'lakdnHRU'

  data: SignInData

  static get(): SignInData {
    const data = globalThis.localStorage?.getItem(this.key) || null

    if (!data) {
      throw new Error('Error: Data is not defined in storage.')
    }

    return JSON.parse(data)
  }

  static set(data: SignInData): void {
    globalThis.localStorage?.setItem(this.key, JSON.stringify(data))
  }

  static remove(): void {
    globalThis.localStorage?.removeItem(this.key)
  }
}

export default LocalStorageVariables
