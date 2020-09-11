import React, { useEffect } from 'react'
import styled from 'styled-components'
import Film from './Films'

const Wrap = styled.section `

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 2px solid black;
    margin-bottom: 2%;
    padding: 2% 0;
    width: 70%;

`

const Name = styled.h4 `

    color: #443E3E;
    margin-left: 5%;
    font-size: 1.4rem;
    text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
                    10px 20px 5px rgba(0,0,0,0.05),
                    -10px 20px 5px rgba(0,0,0,0.05);

`
const Button = styled.button `

    color: red;
    margin-right: 5%;
    width: 26%;
    padding: 0.7em 1.4em;
    font-size: 1.2rem;
    font-family:'Roboto',sans-serif;
    text-transform: uppercase;
    color: #443E3E;
    background-color: white;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    opacity: 0.7;

`


const Character = ({info, filmList}) => {
    
    // const [film, setFilm] = useState({})

    return (

        <Wrap>
            <Name>{info.name}</Name>
            { 
                /* {

                    filmList.map( (eachFilm) => {

                        useEffect( () => {

                            axios
                            .get(eachFilm)
                            .then(response => {
                                console.log(response)
                            })
                            .catch(error => {
                                console.log('HEY JOON, YOU FAILED TO FETCH DATA')
                            })
                        
                        
                        }, [])

                        return <Film list={film}/>
                
                    })
                } */
            }
            <Button>{info.birth_year}</Button>
        </Wrap>

    )

}


export default Character
