export default function User ({ username, image, email }){

return(
    <div className="card text-dark">
        <img src={image} className="img-top" />
        <div className="card-body"></div>
        <h2 className="card-title">{username}</h2>
        <p className="card-text">{email}</p>
    </div>
)

}