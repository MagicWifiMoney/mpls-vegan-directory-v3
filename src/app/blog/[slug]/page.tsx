import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog-posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | MPLS Vegan`,
    description: post.description,
    alternates: {
      canonical: `https://mplsvegan.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      url: `https://mplsvegan.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function generateBlogPostingSchema(post: ReturnType<typeof getBlogPostBySlug>) {
  if (!post) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage
      ? `https://mplsvegan.com${post.featuredImage}`
      : 'https://mplsvegan.com/og-image.png',
    author: [
      {
        '@type': 'Person',
        name: 'Mia',
        url: 'https://mplsvegan.com/about',
      },
      {
        '@type': 'Person',
        name: 'Jay',
        url: 'https://mplsvegan.com/about',
      },
    ],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Minneapolis Vegan Directory',
      url: 'https://mplsvegan.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mplsvegan.com/opengraph-image',
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mplsvegan.com/blog/${post.slug}`,
    },
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category,
  };
}

function generateFAQSchema(post: ReturnType<typeof getBlogPostBySlug>) {
  if (!post || !post.faqs || post.faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function generateBreadcrumbSchema(post: ReturnType<typeof getBlogPostBySlug>) {
  if (!post) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mplsvegan.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://mplsvegan.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://mplsvegan.com/blog/${post.slug}`,
      },
    ],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = generateBlogPostingSchema(post);
  const faqSchema = generateFAQSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema(post);

  // Get related posts using the new relatedPosts field
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <>
      {/* Schema.org JSON-LD */}
      {blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#3d4a3d] to-[#2a2a2a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245, 240, 232, 0.5) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-16 pt-32">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#f5f0e8]/50">
              <li>
                <Link href="/" className="hover:text-[#d4a574] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <Link href="/blog" className="hover:text-[#d4a574] transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="text-[#f5f0e8]/70 truncate max-w-[200px]">{post.title}</span>
              </li>
            </ol>
          </nav>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium badge-vegan">
                {post.category}
              </span>
              <span className="text-[#f5f0e8]/40 text-sm">{post.readingTime}</span>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl text-[#f5f0e8] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-[#f5f0e8]/50 text-sm">
              <span>By {post.author}</span>
              <span className="w-1 h-1 rounded-full bg-[#f5f0e8]/30" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-3 py-1 rounded-full text-xs bg-[#2a2a2a] text-[#f5f0e8]/60"
                >
                  #{tag.replace(/\s+/g, '-')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* TL;DR Summary Box - Answer First for LLM/AI Discovery */}
          {post.tldr && (
            <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-[#3d4a3d]/50 to-[#2a2a2a] border border-[#d4a574]/20">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <h2 className="font-display text-lg text-[#d4a574]">TL;DR</h2>
              </div>
              <p className="text-[#f5f0e8]/90 leading-relaxed">
                {post.tldr}
              </p>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-[#f5f0e8] prose-headings:font-normal
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-16
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-14 prose-h2:border-b prose-h2:border-[#f5f0e8]/10 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10
            prose-p:text-[#f5f0e8]/80 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#d4a574] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#f5f0e8] prose-strong:font-semibold
            prose-em:text-[#f5f0e8]/70
            prose-ul:text-[#f5f0e8]/80 prose-ol:text-[#f5f0e8]/80
            prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#d4a574] prose-blockquote:bg-[#2a2a2a] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-blockquote:text-[#f5f0e8]/70
            prose-code:text-[#d4a574] prose-code:bg-[#2a2a2a] prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-[#2a2a2a] prose-pre:rounded-lg
            prose-hr:border-[#f5f0e8]/10
            prose-table:text-[#f5f0e8]/80
            prose-th:text-[#f5f0e8] prose-th:font-medium prose-th:text-left prose-th:pb-3 prose-th:border-b prose-th:border-[#f5f0e8]/20
            prose-td:py-3 prose-td:border-b prose-td:border-[#f5f0e8]/10
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-[#f5f0e8]/10">
              <h2 className="font-display text-3xl text-[#f5f0e8] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="card-elevated rounded-xl p-6"
                  >
                    <h3 className="font-display text-xl text-[#f5f0e8] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-[#f5f0e8]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Related Guides Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 lg:px-8 border-t border-[#f5f0e8]/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl text-[#f5f0e8] mb-8 text-center">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group card-elevated rounded-2xl p-6 hover:ring-2 hover:ring-[#d4a574]/30 transition-all duration-300"
                >
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-[#2a2a2a] text-[#f5f0e8]/60 mb-4">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-display text-lg text-[#f5f0e8] group-hover:text-[#d4a574] transition-colors line-clamp-2 mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-[#f5f0e8]/50 text-sm line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-elevated rounded-2xl p-12">
            <h2 className="font-display text-3xl text-[#f5f0e8] mb-4">
              Ready to Explore?
            </h2>
            <p className="text-[#f5f0e8]/60 mb-8">
              Find all 46 vegan restaurants in our complete Minneapolis directory
            </p>
            <Link
              href="/restaurants"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4a574] text-[#1a1a1a] font-medium hover:bg-[#e5b685] transition-colors"
            >
              Browse All Restaurants
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
