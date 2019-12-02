import React from 'react'
import PropTypes from 'prop-types'
export default function HomePage(props) {
    console.log(props.masterPostList)
    return (
        <div>
            Hello World
        </div>
    )
}
HomePage.propTypes = {
    masterPostList: PropTypes.array
}