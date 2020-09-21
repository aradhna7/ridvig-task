import React from 'react'

const header = (props) => {
    return (
        <header>
     
        <button onClick={props.onClick}>
            Toggle sidebar (state: {props.showSideBar.toString()})
        </button>
        </header>
    )
}

export default header
