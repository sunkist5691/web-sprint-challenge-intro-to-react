import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const WrapInfo = styled.section `

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 2px solid black;
    margin-bottom: 2%;
    padding: 2% 0;
    width: 70%;


`


const Film = ({list}) => {

    return (

        <WrapInfo>
            <h3>Title: {list.title}</h3>
            <h6>Director: {list.director}</h6>
            <h6>Producer: {list.producer}</h6>
            <h6>Date: {list.release_date}</h6>
        </WrapInfo>

    )

}



export default Film