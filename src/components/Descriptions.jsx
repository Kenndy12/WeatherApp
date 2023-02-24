import React from 'react'
import "./Descriptions.css"
import { FaArrowDown } from 'react-icons/fa'

const Descriptions = () => {
  return (
    <div className="section section_description">
        <div className="card">
            <div className="description_card-icon">
                <FaArrowDown/>
                <small>Min</small>
            </div>
            <h2>26 C</h2>
        </div>

        <div className="card">
            <div className="description_card-icon">
                <FaArrowDown/>
                <small>Min</small>
            </div>
            <h2>26 C</h2>
        </div>

        <div className="card">
            <div className="description_card-icon">
                <FaArrowDown/>
                <small>Min</small>
            </div>
            <h2>26 C</h2>
        </div>

        <div className="card">
            <div className="description_card-icon">
                <FaArrowDown/>
                <small>Min</small>
            </div>
            <h2>26 C</h2>
        </div>
    </div>
  )
}

export default Descriptions