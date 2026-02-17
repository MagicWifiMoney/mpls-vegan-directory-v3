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

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
