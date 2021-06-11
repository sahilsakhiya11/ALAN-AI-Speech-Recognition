import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'f44372efd8d56f9c1870a5643f75e0302e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    
    useEffect(()=> {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadLines') {
                    console.log(articles);
                }
            }
        })
    },[]);

    return(
    <div>
        <h1>Speech Recognition Application by Sahil Patel</h1>
    </div>
    );
}

export default App;