export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(path)
  const body: unknown = await response.json()
  if (!response.ok) {
    const message =
      typeof body === 'object' && body && 'error' in body && typeof body.error === 'string'
        ? body.error
        : 'Заявката не мина'
    throw new Error(message)
  }
  return body as T
}
