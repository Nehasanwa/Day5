import React from 'react'
import CustomButton from '../components/CustomButton'

const About = () => {
    const data = {
        name: "Neha Sanwal",
        empId: "8147",
        division: "EAD",
        organisation: "Deloitte India",
        position: "Trainee"
    }
    return (
        <div>
            
            <h1> This is the About Page</h1>
            <marquee>About Page</marquee>
            <table width = "100%" border="1" position = "centre">
        <tr>
            <td><b>Name</b></td>
            <td>{data.name}</td>
            </tr>
        <tr>
            <td><b>Employee Id</b></td>
            <td>{data.empId}</td>
            </tr>
        <tr>
            <td><b>Division</b></td>
            <td>{data.division}</td>
        </tr>
        <tr>
            <td><b>Organisation</b></td>
            <td>{data.organisation}</td>
        </tr>
        <tr>
            <td><b>Position</b></td>
            <td>{data.position}</td>
        </tr>

            </table>
            <CustomButton />
        </div>
      )
    }

export default About