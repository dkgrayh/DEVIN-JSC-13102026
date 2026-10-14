import type { ServerResponse } from 'node:http'
import type { Connect, Plugin } from 'vite'
import { checkDatabase } from './db'

function send(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

export function apiPlugin(): Plugin {
  const handle: Connect.NextHandleFunction = async (req, res, next) => {
    const path = req.url?.split('?')[0]
    if (path !== '/api/health') {
      next()
      return
    }

    try {
      const database = await checkDatabase()
      send(res, 200, { ok: true, database })
    } catch (error) {
      console.error(error)
      const message = error instanceof Error ? error.message : 'Базата не отговаря'
      const safe = message === 'DATABASE_URL липсва' ? message : 'Базата не отговаря'
      send(res, 503, { ok: false, error: safe })
    }
  }

  return {
    name: 'devin-api',
    configureServer(server) {
      server.middlewares.use(handle)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handle)
    },
  }
}
