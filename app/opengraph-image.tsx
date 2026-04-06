import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Blanc Odontologia - Clínica Odontológica em Florianópolis';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          background: 'linear-gradient(135deg, #FAFAFA 0%, #F4F4F4 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            border: '3px solid #C0AF7F',
            borderRadius: '24px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
          }}
        >
          <div style={{ display: 'flex', marginBottom: '24px' }}>
            <span style={{ color: '#C0AF7F', fontSize: '72px', fontWeight: 700 }}>Blanc</span>
            <span style={{ color: '#333333', fontSize: '72px', fontWeight: 400 }}>Odontologia</span>
          </div>
          <p style={{ fontSize: '28px', color: '#54595F', marginBottom: '40px' }}>
            Sorrisos que inspiram confiança
          </p>
          <div
            style={{
              background: '#C0AF7F',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            Agende sua avaliação
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}