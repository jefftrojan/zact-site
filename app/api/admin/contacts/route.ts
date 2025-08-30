import { NextResponse } from 'next/server'
import { readFile, mkdir } from 'fs/promises'
import { join } from 'path'

// Helper function to ensure data directory exists
async function ensureDataDir() {
  const dataDir = join(process.cwd(), 'data')
  try {
    await mkdir(dataDir, { recursive: true })
  } catch (error) {
    // Directory might already exist
  }
  return dataDir
}

// Helper function to read existing contacts
async function readContacts() {
  try {
    const dataDir = await ensureDataDir()
    const contactsFile = join(dataDir, 'waitlist-contacts.json')
    const data = await readFile(contactsFile, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // File doesn't exist or is invalid, return empty array
    return []
  }
}

export async function GET(req: Request) {
  try {
    const contacts = await readContacts()
    
    return NextResponse.json({ 
      ok: true, 
      contacts,
      count: contacts.length,
      message: `Found ${contacts.length} waitlist contacts`
    })
    
  } catch (e) {
    console.error('Admin contacts API error:', e)
    return NextResponse.json({ error: 'Failed to read contacts' }, { status: 500 })
  }
}
