import { createEffect, createSignal } from "solid-js"
import { userID, setUserID, login, setLogin, user, setUser } from '../App';

const [id, setID] = createSignal('')
const Home = () => {
    createEffect(async()=>{
        const res = await fetch(`https://note-the-project-n.herokuapp.com/steam/getinfo?type=gamelist`)
        const data = await res.json()
        console.log(data)
    })
    console.log(user())
    let userData = user()
    return (
        <div>
            <h2>Home</h2>
            <h5>{user()[0].personaname}</h5>
            <img src={user()[0].avatarfull}></img>
        </div>
    )
}

export default Home;