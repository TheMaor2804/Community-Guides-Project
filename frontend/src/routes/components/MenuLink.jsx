import React from 'react'
import NavBarItem from './NavbarItem'

export default function MenuLink({ text, to, onClick, styles }) {
    return (
        <NavBarItem sx={{ ...styles }}
            onClick={onClick}
            to={to}
            label={text}
        />

    )
}
