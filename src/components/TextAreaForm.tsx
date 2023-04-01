import React, { useState } from 'react';
import { Form, Input } from 'antd';
import Button from './AntdButton';

import '../views//pages/pages-style.css';

const { TextArea } = Input;
const textareaValue = "<Button type='primary' name='Button' />";


const AntdTextAreaForm = () => {
    const [isCopy, setIsCopy] = useState(false);

    const copyFile = async (e: any) => {
        await navigator.clipboard.writeText(textareaValue);
        setIsCopy(!isCopy);
        e.preventDefault();
    }

    return (
        <Form className='textarea-form'>
            <TextArea className='textarea' size='large' disabled={true} rows={15} value={textareaValue}>
                {textareaValue}
            </TextArea>
            <Button name='Copy' className='copy-code' htmlType='submit' onClick={copyFile} type='dashed' size='small' />
        </Form>
    );
}
 
export default AntdTextAreaForm;