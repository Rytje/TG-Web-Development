import React from 'react'
import Input from './Input'
import ClassResult from './ClassResult'
import FunctionResult from './FunctionResult'

export default function Introductie() {
    return (
        <div>
            <h1>Hello world</h1>
            <Input/>
            <ClassResult/>
            <FunctionResult  value={"test"} />
        </div>
    )
}
