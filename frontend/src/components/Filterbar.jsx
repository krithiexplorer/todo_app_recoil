import React from 'react'
import { FilterAtom } from '../store/atoms/FilterAtom'
import { useRecoilState } from 'recoil'

export default function Filterbar() {
   const [filterValue, setFilterValue] = useRecoilState(FilterAtom)
  return (
    <div>
        <input type="text" placeholder='Filter your todos' onChange={(e)=>setFilterValue(e.target.value)}/>
        <button type="submit">Search</button>
    </div>
  )
}
