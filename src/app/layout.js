import React from 'react'
export default async function RootLayout({ children, params: { session, ...params } }) {

    return (
        <html lang="en">
            <body>

                {children}

            </body>
        </html>
    )
}

