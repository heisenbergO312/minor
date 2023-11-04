import React from 'react'
import Layout from '../components/layouts/Layout'

const HomePage = () => {
  return (
    <Layout>
       <section>
         
       </section>
       <section class="Description">
            <h2 class="center-container2">What is Car Insurance?</h2>
            <div class="container-insurance-info">
        <div class="left">
            {/* <h2 style={{textAlign:"center"}}>Information</h2> */}
            <p style={{textAlign:"left"}}>A Car Insurance policy is a contract between the vehicle owner and the insurer to protect your vehicle against third-party liabilities and own damages.
              <br />
              1. In India, it is mandatory to have a car insurance policy according to Section 146 of the Motor Vehicles Act, 1988
              <br />
              2. A car insurance policy protects vehicle owners against unforeseen events such as accidents, theft, natural & man-made disasters. The insurance company will cover the cost of car repairs in an accident.
              <br />
              3. The Third-Party (TP) car insurance policy allows one to file a claim for damages caused to another vehicle (third-party liabilities) involved in an accident.
              <br />
              4. An Own Damage (OD) car insurance provides coverage for the vehicle owner against various natural and man-made disasters.
              <br />
              5. A comprehensive car insurance policy covers third-party liabilities and own damage costs incurred to the policy holder along with the personal accidental coverage.</p>
        </div>
        <div class="right">
            {/* <img class="image3" src="your-image.jpg" alt="Image Description" /> */}
        </div>
    </div>
       </section>
    </Layout>
  )
}

export default HomePage