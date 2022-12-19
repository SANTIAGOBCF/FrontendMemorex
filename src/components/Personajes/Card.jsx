function Card ({imageSource, name}) {

    return (

        <div className="card text-center" >
            <img src={imageSource} alt="a wallpaper" className="card-img-top" height={"135"}/>
            <div>
                <h4>{name}</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem molestias earum fuga eligendi odio, consectetur necessitatibus iste at distinctio.
                </p>
                <a
                    href="#"
                    
                    className="btn btn-outline-secondary border-0"
                    rel="noreferrer"
                    >
                    Ver mas
                </a>
            </div>
        </div>

    )
};
export default Card