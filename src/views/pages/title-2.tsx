import React, { useState } from 'react';
import AntdTextAreaForm from '../../components/TextAreaForm';

import './pages-style.css';


const Title2 = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className='page2-container'>
            <h2>Title 2</h2>
            
                <br />
            {!isExpanded && (
                <AntdTextAreaForm />
            )}
        </div>
    );
}
 
export default Title2;