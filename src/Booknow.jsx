import React from 'react'

function Booknow() {
    return (
    <>
      <section className="section-two bg-light" id="bookroom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <form className="p-4 shadow bg-white rounded">
                            <h4 className="mb-3">Book Now !</h4>
                            <div className="row text-left">
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <label> Check in : </label>
                                        <input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkin-date"/>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <label> Check out : </label>
                                        <input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkout-date"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Adults : </label>
                                                <input type="number" min="0" autocomplete="off" id="adult" required="" className="form-control" placeholder="Adults :"/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Children : </label>
                                                <input type="number" min="0" autocomplete="off" id="children" className="form-control" placeholder="Children :"/>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mt-2">
                                            <input type="submit" id="search" name="search" className="searchbtn btn btn-primary btn-block p" value="Search"/>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    </>
    )
}

export default Booknow
