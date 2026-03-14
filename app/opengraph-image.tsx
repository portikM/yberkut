import { ImageResponse } from 'next/og'

export const alt ='Yuliia Berkut — Accountant & Bookkeeper for Contractors in Toronto'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const imgRes = await fetch('https://yberkut.com/yberkut.png')
  const imgBuf = await imgRes.arrayBuffer()
  const base64 = Buffer.from(imgBuf).toString('base64')
  const profileSrc = `data:image/png;base64,${base64}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#059669',
          }}
        />

        {/* Profile photo */}
        <img
          src={profileSrc}
          width={140}
          height={140}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #e5e7eb',
            marginBottom: '28px',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}
        >
          Yuliia Berkut
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '28px',
            color: '#059669',
            fontWeight: 500,
            marginBottom: '20px',
          }}
        >
          Accountant &amp; Bookkeeper for Contractors
        </div>

        {/* Location pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f3f4f6',
            borderRadius: '999px',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <div style={{ fontSize: '20px', color: '#6b7280' }}>📍 Toronto, Ontario</div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#059669',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
