import './Profile.css'

export default  function Profile() {
    return (
        <>
            <br id='Profile' />
            <div id="profileHeader">
                <h1>PROFILE</h1>
                <p>I'm a creative multitasking developer</p>
            </div>
            <div id="profile">
                <div className='about'>
                    <h1>About Me</h1>
                    <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus. 
                    </p>
                </div>
                <div className='pict'><div></div></div>
                <div className='detail'>
                    <h1>Details</h1>
                    <b>Name:</b>
                    <p>Fery Andika</p>
                    <b>Age:</b>
                    <p>20 yeaers</p>
                    <b>Location:</b>
                    <p>Jakarta, Indonesia.</p>
                </div>
            </div>
        </>
    )
}