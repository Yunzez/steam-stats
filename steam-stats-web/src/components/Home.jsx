import { createEffect, createSignal } from "solid-js"

const [key, setKey] = createSignal('8C2D5E3E6307727E59F59B93ACC58BC2')

const Home = () => {
    createEffect(async()=>{
        const res = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key()}&steamids=76561198360075763`,
            {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }})
        // const data = await res.json()
        console.log(res.json())
    })
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default Home;