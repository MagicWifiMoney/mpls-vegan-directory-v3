import { ImageResponse } from 'next/og'
import { getBlogPostBySlug, blogPosts } from '@/data/blog-posts'

export const alt = 'MPLS Vegan Blog Post'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    const title = post?.title || 'MPLS Vegan Blog';
    const category = post?.category || 'Blog';

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
                    padding: '60px',
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

                {/* Category badge */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: 18,
                        color: '#d4a574',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase' as const,
                        marginBottom: 24,
                        padding: '8px 20px',
                        border: '1px solid rgba(212,165,116,0.3)',
                        borderRadius: '9999px',
                    }}
                >
                    {category}
                </div>

                {/* Title */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: title.length > 60 ? 42 : 52,
                        fontWeight: 400,
                        color: '#f5f0e8',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        lineHeight: 1.2,
                        maxWidth: '900px',
                    }}
                >
                    {title}
                </div>

                {/* Divider */}
                <div
                    style={{
                        display: 'flex',
                        width: 120,
                        height: 2,
                        background: 'linear-gradient(90deg, transparent, #d4a574, transparent)',
                        marginTop: 32,
                        marginBottom: 24,
                    }}
                />

                {/* Branding */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                    }}
                >
                    <div style={{ display: 'flex', fontSize: 28 }}>🌱</div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 22,
                            color: 'rgba(245,240,232,0.5)',
                        }}
                    >
                        mplsvegan.com
                    </div>
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
