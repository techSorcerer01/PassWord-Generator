function Effect({length,setLength,charac,setCharac,num,setNum}){
    const handlingRange = (e)=>{
        setLength(e.target.value);
        
    }
    const handlingChar = ()=>{setCharac((prev)=>!prev)};
    const handlingNum = ()=>{setNum((prev)=>!prev)};
    return(
        <div className="flex justify-evenly w-full">
         <input type="range" onChange={handlingRange} min="8" max="20" value={length} id='rangeValue'/>
          <label htmlFor="rangeValue"  className='text-white'> Length {length} </label>
          <input type="checkbox" onChange={handlingChar} checked={charac} id='char'/>
          <label htmlFor="char" className='text-white'>Character </label>
          <input type="checkbox" onChange={handlingNum} checked={num} id='num' />
          <label htmlFor="num" className='text-white'>Numbers</label>
        </div>
    )

}
export default Effect