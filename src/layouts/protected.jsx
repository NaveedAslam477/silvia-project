import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
      let login = localStorage.getItem('user');
      if(!login){
        navigate('/auth/sign-in')
      }
    }, [])

  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected