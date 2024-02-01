import React, { ReactNode } from 'react'

interface CardProps {
 icon?: ReactNode;
 title?: string,
 description?: string
}

export default function Card({icon, title, description} : CardProps) {
    return(
    <div className='bg-green text-white rounded-md grid place-items-center p-6 gap-4 w-full'>
        <div>{icon}</div>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className='text-sm text-center'>{description}</p>
    </div>
    )
}
