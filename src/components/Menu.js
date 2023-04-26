import React from 'react'

function Menu() {
  return (
    <div style={{padding: "5%"}}>
            <div id="carouselExampleCaptions" classNameName="carousel slide" style={{padding: "5%"}}>
                <div classNameName="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" classNameName="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div classNameName="carousel-inner">
                    <div classNameName="carousel-item active">
                    <img src="..." classNameName="d-block w-100" alt="..." />
                    <div classNameName="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div classNameName="carousel-item">
                    <img src="..." classNameName="d-block w-100" alt="..." />
                    <div classNameName="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div classNameName="carousel-item">
                    <img src="..." classNameName="d-block w-100" alt="..." />
                    <div classNameName="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span classNameName="visually-hidden">Previous</span>
                </button>
                <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
                    <span classNameName="visually-hidden">Next</span>
                </button>
            </div>
            <div style={{padding: "5%"}}>
                <button>ORDER NOW</button>
            </div>
            <div style={{padding: "5%"}}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                        Swiggy
                        </div>
                        <div className="col">
                        Dine-in
                        </div>
                        <div className="col">
                        Zomato
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Menu
