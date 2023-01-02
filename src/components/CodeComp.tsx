import React, {useEffect, useState} from 'react';
import QRCode from 'qrcode'

interface ICodeComp{
    text?: string
}

const CodeComp:React.FC<ICodeComp> = ({text}) => {
    const [codeImg, setCodeImg] = useState('')
    const [codeText, setCodeText] = useState('www.mysite.com')
    const textRef = React.useRef<HTMLInputElement>(null)
    useEffect(()=>{
        QRCode.toDataURL(codeText, {type: 'image/jpeg'}).then(data=>setCodeImg(data))
    },[])


   async function tst(){

        QRCode.toDataURL(String(textRef.current?.value), {type: 'image/jpeg',color: {
                dark:"#010599FF",
                light:"#FFBF60FF"
            }}).then(data=>setCodeImg(data))
    }


    return (

        <div>
            <img src={codeImg} alt="code"/>
            {/*<input ref={textRef}/>*/}
            <input value={codeText}/>
            <input type={"color"}/>
           <button onClick={tst}>test</button>

        </div>
    );
};

export default CodeComp