import React from 'react'

const Card = ({ total, icon, subText, bgColor = 'bg-primary' }) => {
  return (
    <div className={`${bgColor} text-white p-4 rounded`}>
      <div className="d-flex align-items-center gap-2" style={{ fontSize: '25px' }}>
        {icon} {total}
      </div>

      <div>{subText}</div>
    </div>
  )
}

export default Card
