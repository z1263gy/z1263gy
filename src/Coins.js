import React, {useState} from 'react'

function Coins() {
    const [bpi, setBpi] = useState({
        USD: {
            code: "",
            rate: "",
            description: "",
            rate_float: 0.0,
        },
        AUD: {
            code: "",
            rate: "",
            description: "",
            rate_float: 0.0,
        }
    })
    const handleClick = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
            .then(results => results.json())
            .then(jsonData => {
                setBpi(jsonData.bpi);
                console.log("bpi is", bpi)
            })
    }
    return (
        <div>
            The current price of Bitcoin
            <div>{bpi.USD.code}: {bpi.USD.rate}</div>
            <div>{bpi.AUD.code}: {bpi.AUD.rate}</div>
            the current holdings are
            <div>$ {0.12106304 * bpi.AUD.rate_float}</div>
            <button onClick={handleClick}> click to get current bitcoin prices </button>
        </div>
    )
}

export default Coins