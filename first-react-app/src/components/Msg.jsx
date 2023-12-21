export default function Msg({userName,textColor}){
    return(
        <>
            <h2 style={{color: textColor}}>{"Welocome "+userName}</h2>
        </>
    )
}