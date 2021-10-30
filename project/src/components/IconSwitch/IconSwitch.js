function IconSwitch(props) {
    return (
        <div className='switch'>
            <span className="material-icons" onClick={props.onSwitch}>{props.icon}</span>
        </div>
    )
}

export default IconSwitch;