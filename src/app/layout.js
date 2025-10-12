import "./globals.css";

/**
 * Provides the application's root HTML layout with language set to "en", a top navigation placeholder, the page content, and a footer.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children - Content to render inside the layout's body.
 * @returns {JSX.Element} The root <html> structure containing the <body> with navigation, the provided children, and a footer.
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div>Nav</div>
                {children}
                <div>Footer</div>
            </body>
        </html>
    );
}