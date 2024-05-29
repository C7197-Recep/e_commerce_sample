import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; ECW 2024</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3 mr-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!" style={{
                            // color: 'red',
                            // textAlign: 'center',
                            // margin: "40 40 40 auto",
                            }}
                            >Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer