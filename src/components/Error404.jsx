import logo from "./img/logolhr.png";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-danger text-center" alt="Laurino´s House" role="alert">
                        <p><img src={logo} alt="Laurino.s House" width={"108"} /></p>
                        <h1>Error 404!</h1>
                        <h3>La página que estás buscando no existe!!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404;