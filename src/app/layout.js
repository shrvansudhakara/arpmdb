import "./globals.css";

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
