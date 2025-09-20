#!/usr/bin/env tsx

import { initializeDatabase } from '../lib/database'

async function main() {
  try {
    console.log('Initializing database...')
    await initializeDatabase()
    console.log('Database initialized successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error initializing database:', error)
    process.exit(1)
  }
}

main()






