import { useState,useEffect, useRef} from "react";
function Password({length,charac,num}){
    const [pass,setPass] = useState('');
    const passwordRef = useRef(null);
    const copy = ()=>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(pass);
    }
    let passString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(charac){
        passString+="@!#$%^&*()__";
    }
    if(num){
        passString+="12345678901234567890";
    }
    let passwordd = '';
    for(let i = 0 ; i<length;i++){
       const index = Math.floor(Math.random()*passString.length);
       passwordd+= passString.charAt(index);
       
    }
    useEffect(()=>{setPass(passwordd)},[length,charac,num]);

    

    return(
        <div className="flex w-full space-x-5 mb-7 mt-1 ml-7">
             <input
            type="text"
            placeholder="Your generated password"
            className="p-2 rounded text-black w-80"
            readOnly
            value={pass}
            ref={passwordRef}
          />
          <button onClick={copy} className='text-white bg-blue-500 aline-center border-2 border-black border-solid px-1 py-0 rounded hover:bg-blue-600 active:translate-x-[1px] active:translate-y-[1px]'>
              Copy
          </button>

        </div>
    );

}
export default Password;