import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Minneapolis Vegan Directory',
    description: 'Get in touch with the Minneapolis Vegan Directory team. Suggest a restaurant, report a correction, or partner with us.',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact Minneapolis Vegan Directory',
        description: 'Suggest a restaurant, report a correction, or say hello',
        url: 'https://mplsvegan.com/contact',
    },
};

// ContactPage schema for search appearance
const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Minneapolis Vegan Directory',
    description: 'Get in touch with the MPLS Vegan team. Suggest a restaurant, report a correction, or partner with us.',
    url: 'https://mplsvegan.com/contact',
    mainEntity: {
        '@type': 'Organization',
        name: 'Minneapolis Vegan Directory',
        url: 'https://mplsvegan.com',
        email: 'hello@mplsvegan.com',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            {children}
        </>
    );
}
