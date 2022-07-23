import { createEffect, createSignal, Suspense, lazy, createResource, For } from "solid-js"
import { userID, setUserID, login, setLogin, user, setUser } from '../App';


const [games, setGames] = createSignal('')
const [gamesNum, setGamesNum] = createSignal('')
// const Games = lazy(async () => {
//     const resGameList = await fetch(`https://note-the-project-n.herokuapp.com/steam/getinfo?type=gamelist`)
//     const dataGameList = await resGameList.json()
//     console.log(dataGameList)

//     const resOwnedGameList = await fetch(`https://note-the-project-n.herokuapp.com/steam/getinfo?type=ownedgame&uid=${userID()}`)
//     const dataOwnedGameList = await resOwnedGameList.json()
//     console.log(dataOwnedGameList.info.response)
//     setGames(dataOwnedGameList.info.response.games)
//     setGamesNum(dataOwnedGameList.info.response.game_count)
//     console.log(games(), gamesNum())

//     return(
//         <div>
//            <h5>Hi There, {games()}</h5>
//         </div>
//     )
// });

const fetchAllGame = async (id) => {
    let gamesDataraw = await fetch(`https://note-the-project-n.herokuapp.com/steam/getinfo?type=ownedgame&uid=${id}`);
    let gameDataCleaned = await gamesDataraw.json()
    console.log(gameDataCleaned.info.response)
    setGames(gameDataCleaned.info.response.games)
    setGamesNum(gameDataCleaned.info.response.game_count)
    return gameDataCleaned.info.response
}


const Home = () => {
    console.log(user(), userID())
    let userData = user()['0']
    let totalGameNum = 0

    const [gamesFetch] = createResource(userID(), fetchAllGame);
    console.log(games())
    return (
        <div class='container shadow'>
            <h4><b>Hi there,</b> {userData.personaname}</h4>
            <h5>{userData.loccountrycode}</h5>
            <img src={userData.avatarfull}></img>
            <span>{gamesFetch.loading && <h1>"Loading..."</h1>}</span>
            <div>
                <pre>{JSON.stringify(games())}</pre>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <For each={games()}>
                    {(game) => { game }}
                </For>
            </Suspense>
        </div>
    )
}

export default Home;