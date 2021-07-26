import React from 'react'
import Name from './Name'

export default function ListItem({names}) {
    return (
        // <li>{props.value}</li>
        names.map(name => {
            return <Name key={name.id} name = {name} />
        })
    )
}
