import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
const HelloReduxExampleComponent = () =>{
    const message = useSelector((state) => state.hello.message);
    return(<h3>{message}</h3>);
}
export default HelloReduxExampleComponent