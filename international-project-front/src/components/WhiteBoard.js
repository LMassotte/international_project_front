import React from 'react'

export default function WhiteBoard({ height, width, children }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height,
                backgroundColor: 'white',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                overflow: 'hidden',
            }}
        >
            <div style={{
                width: '100%',
                padding: 20,
            }}>
                {children}
            </div>
        </div>
    )
}
