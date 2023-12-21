import '../componentsStyles/LandingElems.css'

function LandingElems(){
    let imgadd = 'https://rukminim2.flixcart.com/image/832/832/k2jbyq80pkrrdj/mobile-refurbished/c/u/e/iphone-11-pro-512-u-mwcd2hn-a-apple-0-original-imafkg2fhzhzzh5s.jpeg?q=70'


    return(
        <div className="LandingElems">
                <img src={imgadd} alt="iphone-11-pro"/>
        </div>
    )
}

export default LandingElems;