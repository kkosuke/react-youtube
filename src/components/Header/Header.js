import React, {useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Style from "./Header.module.scss"
import { Store } from '../../store/index';


const Header = () => {
  const {globalState, setGlobalState} = useContext(Store);
  const [term , setTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    setGlobalState({
      type: "SET_TERM",
      payload: {
        term
      }
    })
    navigate(`/search?query=${term}`)
  }
  useEffect(()=>{
    setTerm(globalState.term)
  },[globalState.term])

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={e=>handleSubmit(e)}>
          <input type="text" placeholder='検索' onChange={(e)=>setTerm
          (e.target.value)}
          value={term}/>
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header