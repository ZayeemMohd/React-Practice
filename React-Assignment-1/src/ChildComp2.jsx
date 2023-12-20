import './ChildComp2.css'
import GlassMorp from './GlassMorp';
// import circless from './assets/circless.jpg'

function ChildComp2(){
    // const imagePath = process.env.PUBLIC_URL + '/assets/circless.jpg';
    // let logo = require('./assets/circless.jpg')

    return(
        <div className="ChildComp2">
            <GlassMorp/>
            <div className='cameraGirl'></div>
        </div>
    )
}

export default ChildComp2;