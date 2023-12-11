import React from 'react'

const Footer = () => {
    let footerStyle = { width: '100%',position:'fixed',bottom:'0' }
    return (
        <div className="bg-dark py-2 footer sticky-footer" style={footerStyle}>
            <p className='text-white text-center'>CopyRight &copy; InfoInsight</p>
        </div>
    )
}

export default Footer


