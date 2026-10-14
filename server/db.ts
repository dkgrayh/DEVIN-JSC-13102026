import { neon } from '@neondatabase/serverless'

function connectionString() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error('DATABASE_URL липсва')
  }
  return url
}

export function db() {
  return neon(connectionString())
}

export async function checkDatabase() {
  const rows = await db()`select current_database() as name`
  const name = rows[0]?.name
  if (typeof name !== 'string') {
    throw new Error('Базата не върна име')
  }
  return name
}
