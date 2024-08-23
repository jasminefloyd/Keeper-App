function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
    <footer className='appFooter'>
        <p>🏆 Greatness Magnified - Made with ❤️</p>
        <p>&copy; All Rights Reserved {currentYear} </p>
    </footer>
    )
}

export default Footer