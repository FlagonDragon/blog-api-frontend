// async function logWeather() {

//     try {

//     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$beijing?key=2X7JKFSQFBAXMQKYQ5R64PRKS`)

//     let weatherData = await response.json();

//     console.log(weatherData);

//     return weatherData;

//     } catch (error) {

//         console.log(error);

//     }

// };

async function logUsers() {

    try {

    const response = await fetch(`https://blog-api-iv3t.onrender.com/users`)

    let usersData = await response.json();

    console.log(usersData);
    console.log(response.headers);
    console.log(response.headers.map);
    // console.log(...response.headers);


    return usersData;

    } catch (error) {

        console.log(error);

    }

};

async function logPosts() {

    try {

    const response = await fetch(`https://blog-api-iv3t.onrender.com/posts`)

    let postsData = await response.json();

    console.log(postsData);
    console.log(response.headers);
    console.log(response.headers.map);
    // console.log(...response.headers);


    return postsData;

    } catch (error) {

        console.log(error);

    }

};

function Home() {

    // logUsers();
    logPosts();

    return(
    <div>
        Hello, haha
    </div>
    )

}

export default Home;