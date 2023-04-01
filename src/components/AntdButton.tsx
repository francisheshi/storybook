import React from 'react';
import { Form, Button } from 'antd';


interface AntdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: any;
    htmlType?: any;
    type?: any;
    className?: string;
    size?: any;
    name?: any;
}

const AntdButton = (props: AntdButtonProps) => {
    
    return (
        <Form.Item>
            <Button className={props.className} {...props}>
                {props.name}
            </Button>
        </Form.Item>
    );
}
 
export default AntdButton;