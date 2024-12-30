import React from 'react'
import Main from './main/Main'
import Header from './header/Header'
import Footer from './footer/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
