import React from 'react'

const ResumePage = () => {
  return (
    <div style={{ 
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        padding: '40px',
        fontSize: '18px',
        lineHeight: '30px',
        textAlign: 'justify'}}>
        <div style={{ backgroundColor: '#f9efae', borderRadius: '5px', padding: '10px'}}>
            <span style={{fontStyle: 'italic', fontSize: '20px'}}>
                Erply Retail Platform (October 2021- Present)
            </span>
            <div>
            <span>
                * Working closely with designers to implement the visual,
            backend developers, and other team members to ensure
            a cohesive and efficient development process.
            </span><br></br>
            <span> * Ensuring that web applications work consistently across
            various web browsers of a web application.</span><br></br>
            <span>
            * Developing and maintaining web applications using
            React.js (with Typescript) as the primary front-end library
            apps with React Router for navigation, Redux for state
            management and Material-UI for styling.
            </span><br></br>
            <span> * Implementing GraphQL and
            RESTful APIs to efficiently fetch and manipulate data.</span>
            <span>* Participating in code reviews to maintain code quality
            Identifying and resolving bugs or issues reported by users
            or the QA team.</span>        
            </div>
        </div>

        <div style={{ backgroundColor: '#f9efae', borderRadius: '5px', padding: '10px'}}>
            <span style={{fontStyle: 'italic', fontSize: '20px'}}>
                Kuehne Nagel (Mar 2021 - Jun 2021)
            </span>
            <div>
            <span>
                * Learned React, JIRA, communication with backend team
                members to solve tasks. 
            </span><br></br>
            <span> * Cooperate with other frontend, backend and product owner
to create a Smart factory project.</span><br></br>
            <span>
            * Worked on admin part of the project where admin is able to
add new user by filling particular details, add new role, and
activating and deactivating the particular roles.
            </span><br></br>
            <span> * Carry out quality assurance tests to discover errors and
optimize usability</span>        
            </div>
        </div>
        
        <div style={{ backgroundColor: '#f9efae', borderRadius: '5px', padding: '10px'}}>
            <span style={{fontStyle: 'italic', fontSize: '20px'}}>
            Data Analyst | E- Residency Hub (Dec 2020- Feb 2021)
            </span>
            <div>
            <span>
                * Utilized Microsoft Excel to organize and manipulate large
datasets, applying functions, filters, and pivot tables for data
transformation and summary.
            </span><br></br>
            <span> * Gathered, cleaned, and organized large datasets from
various companies, ensuring data accuracy and integrity.</span><br></br>
            <span>
            * Generated reports and visualizations using Excel charts and
graphs to present findings to the project manager.
            </span>
                  
            </div>
        </div>
        
       
    </div>
  )
}

export default ResumePage