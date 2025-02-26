import React from 'react'

const Iframe = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "300px" }}>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2,Daura,%20katsina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">drones ireland</a>
        </iframe>
      </div>
    </div>
  );
}

export default Iframe
