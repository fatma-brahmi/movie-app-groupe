import React from 'react'

const StartRating = ({rate ,handelrate}) => {
    const stars=(n)=>{
let star=[];
for (let i = 1; i <= 5; i++) {
    
    if (i<=n) {
        star.push(
            <span onClick={()=> handelrate(i)} style={{
                color:'gold', cursor:'pointer'
            }}>
                ★ 
            </span>
        )
    } else {
        star.push(
            <span onClick={()=> handelrate(i)} style={{
                color:'black', cursor:'pointer'
            }}>
                ★ 
            </span>
        )
    }
    
}
return star
    }
    return (
        <div>
            {stars(rate)}
        </div>
    )
}
StartRating.defaultProps={
    handelrate:()=>{},
    rate:1
}
export default StartRating
