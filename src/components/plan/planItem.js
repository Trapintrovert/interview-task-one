import React from 'react'

const planItem = ({data}) => {
    return (
        <div>
            {data && data.mtn.network}
        </div>
    )
}

export default planItem
