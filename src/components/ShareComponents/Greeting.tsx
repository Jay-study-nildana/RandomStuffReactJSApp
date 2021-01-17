//a simple greeting component to be used a reference when building new components.

//usage <Greeting message={message} />

import React, { FC, useState, useEffect } from 'react';

interface GreetingProps {

    name?: string

}

const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {

    const [message, setMessage] = useState("");

    useEffect(() => {

        if (name) {

            setMessage(`Hello from, ${name}`);

        }

    }, [name])

    if (!name) {

        return <div>no name given</div>;

    }

    return <div>

        {message}

    </div>;

}

export default Greeting;