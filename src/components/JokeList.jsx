import { useGetJokesQuery } from '../feature/apiSlice.js'

const JokeList = () => {

    const { data, isLoading, isError } = useGetJokesQuery()


    if (isLoading) {
        return <h3 style={{ margin: "10% auto", width: "max-content" }}>Loading...</h3>
    }

    if (isError || data?.error) {
        return <p style={{ color: "red" }}>Data not found</p>
    }
    const { type, setup, delivery, joke, category } = data

    return (

        <div className='container'>
            <h2><span style={{ color: "indigo" }}>{category}</span> Jokes</h2>
            {type === 'single' ? (
                <p>{joke}</p>
            ) : (
                <>
                    <p className='para-tag' style={{ fontWeight: "bold", marginTop: "20px" }}>{setup} 🤔 </p>

                    <p className='para-tag' style={{ marginTop: "20PX" }}>{delivery} 🤣😂</p>
                </>
            )}

            <p style={{ marginTop: "100px", textDecoration: "underline", color: "green" }}>|Refresh the page to get more jokes!</p>

        </div>
    )
}

export default JokeList