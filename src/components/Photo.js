const Photo = ({ photo }) => {
    return (
        <div className="card col-6 col-sm-4 col-md-3 text-center p-3 m-1">

            <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>

            </div>
            <img src={photo.cover} className="card-img-top" alt="..." />
        </div>
    )
}

export default Photo