import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Minneapolis Vegan Directory - Plant-Based Dining Guide'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1a1a1a',
                    backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d3a2d 50%, #1a1a1a 100%)',
                    fontFamily: 'serif',
                }}
            >
                {/* Decorative dots */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.05,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245,240,232,0.5) 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                        display: 'flex',
                    }}
                />

                {/* Leaf icon */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: 72,
                        marginBottom: 20,
                    }}
                >
                    🌱
                </div>

                {/* Title */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: 72,
                        fontWeight: 400,
                        color: '#f5f0e8',
                        letterSpacing: '-0.02em',
                        marginBottom: 8,
                    }}
                >
                    MPLS Vegan
                </div>

                {/* Divider */}
                <div
                    style={{
                        display: 'flex',
                        width: 120,
                        height: 2,
                        background: 'linear-gradient(90deg, transparent, #d4a574, transparent)',
                        marginBottom: 24,
                        marginTop: 8,
                    }}
                />

                {/* Subtitle */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: 28,
                        color: '#d4a574',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase' as const,
                    }}
                >
                    Plant-Based Dining Guide
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: 20,
                        color: 'rgba(245,240,232,0.4)',
                        marginTop: 40,
                    }}
                >
                    Minneapolis &amp; Saint Paul · 46+ Restaurants · 2026
                </div>

                {/* Bottom accent bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #d4a574, #c17f59, #d4a574)',
                        display: 'flex',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
