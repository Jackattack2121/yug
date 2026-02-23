import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title') || 'Yugo Metals';
  const subtitle = searchParams.get('subtitle') || '';

  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0f172a',
          position: 'relative',
        }}
      >
        {/* Gradient overlay on the left */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), transparent)',
            display: 'flex',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* Top: Brand name and separator */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              YUGO METALS
            </div>
            <div
              style={{
                width: 80,
                height: 4,
                backgroundColor: '#2563eb',
                marginTop: 16,
                display: 'flex',
              }}
            />
          </div>

          {/* Center: Title and subtitle */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flex: 1,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                maxWidth: '90%',
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  fontSize: 28,
                  color: '#94a3b8',
                  marginTop: 16,
                  lineHeight: 1.4,
                  maxWidth: '85%',
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom: Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: '#64748b',
              }}
            >
              ASX: YUG | yugometals.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );

  imageResponse.headers.set(
    'Cache-Control',
    'public, max-age=3600, immutable',
  );

  return imageResponse;
}
