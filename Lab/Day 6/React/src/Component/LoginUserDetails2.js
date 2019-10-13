import React from 'react'

//Using Function

function LoginUserDetails2 (props) 
{
    return (<div>Hi {props.username}
    
    <LoginUserDetails4 username = {props.username} />
    </div>);
}

function LoginUserDetails4 (props) 
{
    return (<div>Bye {props.username}</div>);
}

export default LoginUserDetails2;

///SOLID - Design Principles