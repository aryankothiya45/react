import { useState } from 'react';

export default function Contact({ contact : {name,email}}) {
    const [expanded, setExpanded] = useState(false);

    const isExpanded = expanded;

    const toggleExpanded = () => {
        setExpanded(prev => !prev);
    };

    return(
        <>
            <h3>{name}</h3>
            {isExpanded && <p>{email}</p>}

            <button onClick={toggleExpanded}>{isExpanded ? 'Hide' : 'Show'} emails</button>

        </>
    );

}

