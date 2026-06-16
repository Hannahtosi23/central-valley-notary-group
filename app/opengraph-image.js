import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Central Valley Notary Group - Fresno Mobile Notary & Loan Signing Agent'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0e2944',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 196,
            height: 196,
            borderRadius: '50%',
            border: '6px solid #e6cd8a',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 164,
              height: 164,
              borderRadius: '50%',
              border: '2px solid #e6cd8a',
            }}
          >
            <div style={{ display: 'flex', fontSize: 94, fontWeight: 700, color: '#e6cd8a', letterSpacing: 2 }}>
              CV
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 50, fontWeight: 700, color: '#ffffff', letterSpacing: 3 }}>
          CENTRAL VALLEY NOTARY GROUP
        </div>
        <div style={{ display: 'flex', width: 360, height: 2, backgroundColor: '#c4a049', marginTop: 26, marginBottom: 26 }} />
        <div style={{ display: 'flex', fontSize: 30, color: '#e6cd8a', letterSpacing: 4 }}>
          MOBILE NOTARY & LOAN SIGNING AGENT
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#b9c2cf', marginTop: 16 }}>
          Fresno, Clovis & the Central Valley
        </div>
      </div>
    ),
    { ...size }
  )
}
