import React, { FC, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const Home:FC = () => {

useEffect(()  => {
        const isAuthenticated = async () => {
            const { attributes } = await Auth.currentAuthenticatedUser();
            console.log(attributes);
        }
        isAuthenticated()
    },[]) 

    return(
        <>
            <h1>ホーム</h1>
        </>
    )
}

export default Home;