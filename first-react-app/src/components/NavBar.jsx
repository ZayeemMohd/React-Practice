import '../componentsStyles/NavBar.css'
// import logo from '../assets/onion logo.png'

function handleClickWarning(event){
    // event.preventDefault();
    alert("WARNING! BE CAREFULL");
}

function NavBar(){
    return(
        <div className="NavBar">
            {/* <img src={logo} alt="onion logo" /> */}
            <form action="#" onSubmit={handleClickWarning}>
            <input type="text" className='NavSearchBar' placeholder='Search Here' onDoubleClick={handleClickWarning}/>
            <button className='MagnifineSearch'>&#128269;</button>
            </form>
        </div>
    )
}


export default NavBar;