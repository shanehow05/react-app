import React from "react"


function AboutUs () {

    return (
        <div> 
            <h1 className="content"> Why Tessera?</h1>
            <p className="ptext">At Tessera, we have one simple goal. To provide password security. Head over to our CreatePassword tab to generate a secure password. </p>
            <h3 className="facts-heading">Security Facts</h3>
            <p className="facts">
                <ul>
                    <li>Average password length is 8 characters or less</li>
                    <li>The most common password in the world is "123456"</li>
                    <li>Over 80% of data breaches are due to poor password security</li>
                    <li>51% of people use the same password for their job and personal apps</li>
                    <li>Only 31% of internet users update their passwords once or twice a year</li>

                </ul>


            </p>


        </div>
    )
}

export default AboutUs