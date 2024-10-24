import { Spinner } from '@nextui-org/react'
import React from 'react'

const LoaderCpt = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 3
        }}>
            <Spinner size="lg" />
        </div>
    )
}

export default LoaderCpt