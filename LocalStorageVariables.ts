

class LocalStorageVariables {
  private static key: string = 'string'


  static get() {
    const data = localStorage?.getItem(this.key) || null

    if (!data) {
      throw new Error('Error: Data is not defined in storage.')
    }

    return JSON.parse(data)
  }

  static set(data): void {
    localStorage?.setItem(this.key, JSON.stringify(data))
  }

  static remove(): void {
    localStorage?.removeItem(this.key)
  }
}

export default LocalStorageVariables
