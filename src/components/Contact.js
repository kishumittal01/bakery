import React from 'react'

function Contact() {
  return (
    <div style={{backgroundColor: "black", color: "white"}}>
        
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223978.15678782357!2d77.23021230960731!3d28.69985448073204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1682525341522!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                <div className="col">
                    <form action="">
                        <input type="text" placeholder='Name' required/>
                        <input type="number" placeholder='Number' required/>
                        <input type="email" placeholder='Email' />
                        <input type="" placeholder='categories'/>
                        <input type="" placeholder='sub-categories' />
                        <input type="text" placeholder='Address' />
                        <input type="text" placeholder='comments if any'/>
                        <button>Submit</button>
                    </form>
                </div>
                
            </div>
        </div>
    
    </div>
  )
}

export default Contact
