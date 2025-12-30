import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const port = process.env.PORT || 4000

const missingEnv = ['SMTP_USER', 'SMTP_PASS'].filter((key) => !process.env[key])
if (missingEnv.length) {
  console.error(`Faltan variables SMTP requeridas: ${missingEnv.join(', ')}`)
} else {
  const passLen = process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0
  const spaceCount = process.env.SMTP_PASS ? (process.env.SMTP_PASS.match(/\s/g) || []).length : 0
  console.log('SMTP config OK:', `user=${process.env.SMTP_USER ? 'set' : 'missing'}`, `passLength=${passLen}`, `spacesInPass=${spaceCount}`)
}

app.use(cors({ origin: true }))
app.use(express.json({ limit: '1mb' }))

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {}

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  if (missingEnv.length) {
    return res.status(500).json({ error: 'Configuracion SMTP incompleta en el servidor' })
  }

  const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '')

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: smtpPass,
    },
  })

  const subject = `[HumusGarden] ${service} - Nuevo mensaje`
  const textBody = [
    'Nuevo contacto desde humusgarden.cl',
    '',
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Telefono: ${phone || 'No indicado'}`,
    `Servicio: ${service}`,
    '',
    'Mensaje:',
    message,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      cc: process.env.SMTP_CC || undefined,
      replyTo: email,
      subject,
      text: textBody,
    })

    return res.json({ ok: true })
  } catch (error) {
    console.error('Error enviando correo de contacto:', error)
    return res.status(500).json({ error: 'No se pudo enviar el mensaje' })
  }
})

app.listen(port, () => {
  console.log(`HumusGarden API escuchando en http://localhost:${port}`)
})
