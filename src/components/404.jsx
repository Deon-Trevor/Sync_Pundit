export default function Page404() {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bolder text-center">Error 404 - Page Not Found!</h1>
                <div className="drawing">
                    <div className="circle"></div>
                    <div className="line"> </div>
                    <div className="ball"></div>
                </div>
                <p>
                    Yey! yey! folk, you are hitting a tangent
                </p>
                <div>
                    <a
                        className="btn btn-outline-dark"
                        href="/"
                    >
                        Go back home
                    </a>
                </div>
            </div>
        </div >
    )
}