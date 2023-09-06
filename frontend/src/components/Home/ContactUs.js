import React from 'react'

const ContactUs = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">

    {/* Basic Layout  */} 
    <div className="row">

        {/* Contact links */} 
        <div className="col-xl">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">01/ Get in Touch</h5>
                </div>
                <div className="card-body">
                        {/*Description */} 
                        <div className="my-4">
                            <p>
                                We are very approachable and would love to speak to you. Feel free to call,send
                                us an email,Tweet us or simply complete the enquiry form to give us feedback.
                                Tell us about any bug you face or suggest a new feature.
                            </p>
                        </div>
                        {/*Description */} 

                        {/*Call */} 
                        <div className="mb-3">
                        <a href="tel:03012233445" type="button" className="btn rounded-pill btn-icon btn-outline-primary">
                                <span className="tf-icons bx bx-phone"></span>
                            </a>
                            <span className="mx-2">0301 2233445</span>
                        </div>
                        {/*Call */} 

                        {/*Email */} 
                        <div className="mb-3">
                        <a href="mailto: 1234@example.com" type="button" 
                           className="btn rounded-pill btn-icon btn-outline-primary">
                            <i className='bx bx-envelope'></i>
                            </a>
                            <span className="mx-2">RMS123@gmail.com</span>
                        </div>
                        {/*Email */} 

                        {/*Twitter */} 
                        <div className="mb-3">
                        <a href="https://twitter.com/" type="button" className="btn rounded-pill btn-icon btn-outline-primary">
                            <i className='bx bxl-twitter'></i>
                            </a>
                            <span className="mx-2">RMS_tweets</span>
                        </div>
                        {/*Twitter */} 

                        {/*Google Maps */} 
                        <div className="mb-3">
                        <a href="https://maps.app.goo.gl/nh5azdd4TZWoP8Yj6" type="button" className="btn rounded-pill btn-icon btn-outline-primary">
                            <i className='bx bx-map'></i>
                            </a>
                            <span className="mx-2">Township, Lahore</span>
                        </div>
                        {/*Google Maps */} 

                </div>
            </div>
        </div>
        {/* Contact links */} 

        {/* Message send form */} 
        <div className="col-xl">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">02/ Send us a message</h5>
                </div>
                <div className="card-body">
                    <form method="post" asp-controller="Home" asp-action="ContactUs">

                        {/*Full name */} 
                        <div className="mb-3">
                            <label className="form-label" asp-for="FullName"></label>
                            <div className="input-group input-group-merge">
                                <span id="basic-icon-default-fullname2" className="input-group-text">
                                    <i className="bx bx-user"></i>
                                </span>
                                <input asp-for="FullName"
                                       className="form-control"
                                       id="basic-icon-default-fullname"
                                       placeholder="John Doe"
                                       aria-label="John Doe"
                                       aria-describedby="basic-icon-default-fullname2" />
                            </div>
                            <span asp-validation-for="FullName" className="text-danger"></span>
                        </div>
                        
                        {/*Email */} 
                        <div className="mb-2">
                            <label className="form-label" asp-for="Email"></label>
                            <div className="input-group input-group-merge">
                                <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                <input asp-for="Email"
                                       id="basic-icon-default-email"
                                       className="form-control"
                                       placeholder="john.doe@example.com"
                                       aria-label="john.doe@example.com"
                                       aria-describedby="basic-icon-default-email2" />
                                <span id="basic-icon-default-email2" className="input-group-text"></span>
                            </div>
                            <div className="form-text">You can use letters, numbers & periods</div>
                            <span asp-validation-for="Email" className="text-danger"></span>
                        </div>

                        {/*Message */} 
                        <div className="mb-3">
                            <label className="form-label" asp-for="Message"></label>
                            <div className="input-group input-group-merge">
                                <span id="basic-icon-default-message2" className="input-group-text">
                                    <i className="bx bx-comment"></i>
                                </span>
                                <textarea asp-for="Message"
                                          id="basic-icon-default-message"
                                          className="form-control"
                                          placeholder="Your message..."
                                          aria-label="Your message..."
                                          aria-describedby="basic-icon-default-message2"></textarea>
                            </div>
                            <div className="form-text">Message should be 20-200 characters long.</div>
                            <span asp-validation-for="Message" className="text-danger"></span>
                        </div>

                        <div className="d-flex justify-content-center my-3">
                            <button type="submit" className="btn btn-primary w-25">
                                <i className='bx bx-upload'></i>&nbsp; Send
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        {/* Message send form */} 

    </div>
</div>
  )
}

export default ContactUs
