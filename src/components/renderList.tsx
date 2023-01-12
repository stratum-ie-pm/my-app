import React from 'react'

const RenderList = () => {
    const data = [
        {
            id: '1',
            title: 'test',
            desc: 'desc',
            price: '10'
        },

        {
            id: '2',
            title: 'test 2',
            desc: 'desc 2',
            price: '20'
        },

        {
            id: '3',
            title: 'test 3',
            desc: 'desc 3',
            price: '30'
        },
    ]

    const topTest = data.map(data => {
        return {
            content: `${data.title} -  ${data.desc}`,
            price: data.price
        }
    })

    const testList = data.map(data => {
        const itemText = `${data.title} - ${data.price}`
        return <li key={data.id}>{itemText}</li>
    })

    return (
        <div>
            {testList}
        </div>
    )

}

export default RenderList