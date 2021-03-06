import React from 'react' 
import './Weather2.css'

const NightRain = () => {
    return (
        <div>
        <svg version="1.1" className="svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
       viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
  <g id="Layer_5">
      <radialGradient id="chubbyMoon_1_" cx="69.25" cy="24.1667" r="71.3092" gradientUnits="userSpaceOnUse">
          <stop  offset="0.4082" style={{stopColor:'#D3D0B2'}} />
          <stop  offset="0.42" style={{stopColor:'#C5C4A0'}} />
      </radialGradient>
      
          <ellipse id="chubbyMoon" fill="url(#chubbyMoon_1_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="57.8" cy="35.2" rx="27.3" ry="26.5"/>
      
          <radialGradient id="mooncrater_2_" cx="241.2625" cy="178.2525" r="71.3092" gradientTransform="matrix(0.2761 0 0 0.2761 -4.5736 -17.9305)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater" fill="url(#mooncrater_2_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="58.9" cy="34.3" rx="7.5" ry="7.3"/>
      
          <radialGradient id="mooncrater_4_" cx="300.6801" cy="-13.015" r="71.3092" gradientTransform="matrix(7.215338e-002 0 0 7.215340e-002 25.6009 15.7241)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater_1_" fill="url(#mooncrater_4_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="46.5" cy="15.6" rx="2" ry="1.9"/>
      
          <radialGradient id="mooncrater_6_" cx="438.9305" cy="50.3256" r="71.3092" gradientTransform="matrix(0.1198 0 0 0.1198 13.506 8.4935)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater_3_" fill="url(#mooncrater_6_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="64.7" cy="15.8" rx="3.3" ry="3.2"/>
      
          <radialGradient id="mooncrater_14_" cx="518.4319" cy="174.6749" r="71.3092" gradientTransform="matrix(0.1405 0 0 0.1405 6.587 5.366)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater_5_" fill="url(#mooncrater_14_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="77.8" cy="31.4" rx="3.8" ry="3.7"/>
      
          <radialGradient id="mooncrater_15_" cx="224.9055" cy="198.5309" r="71.3092" gradientTransform="matrix(0.1712 0 0 0.1712 2.2486 -2.7871)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater_8_" fill="url(#mooncrater_15_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="38.8" cy="33.1" rx="4.7" ry="4.5"/>
      
          <radialGradient id="mooncrater_16_" cx="298.0132" cy="252.9846" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater_9_" fill="url(#mooncrater_16_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="45.3" cy="47.5" rx="3.1" ry="3"/>
      
          <radialGradient id="mooncrater_17_" cx="483.3691" cy="311.4201" r="71.3092" gradientTransform="matrix(0.1135 0 0 0.1135 12.8171 17.5574)" gradientUnits="userSpaceOnUse">
          <stop  offset="0.385" style={{stopColor:'#C2B99D'}} />
          <stop  offset="0.4082" style={{stopColor:'#B5AA86'}} />
      </radialGradient>
      
          <ellipse id="mooncrater_11_" fill="url(#mooncrater_17_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="66.4" cy="54.2" rx="3.1" ry="3"/>
  </g>
  <g id="raindrops">
      <linearGradient id="droplet1" gradientUnits="userSpaceOnUse" x1="30.1887" y1="74.3552" x2="39.518" y2="74.3552">
          <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}} />
          <stop  offset="0.5339" style={{stopColor:'#51B1CD'}} />
      </linearGradient>
      <path id="drop1" fill="url(#droplet1)" d="M34.8,67.2c0,0-10.4,14.3,0,14.3C45.4,81.5,34.8,67.2,34.8,67.2z"/>
      <linearGradient id="droplet2" gradientUnits="userSpaceOnUse" x1="43.5804" y1="74.3552" x2="52.9097" y2="74.3552">
          <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}} />
          <stop  offset="0.5339" style={{stopColor:'#51B1CD'}} />
      </linearGradient>
      <path id="drop2" fill="url(#droplet2)" d="M48.2,67.2c0,0-10.4,14.3,0,14.3C58.8,81.5,48.2,67.2,48.2,67.2z"/>
      <linearGradient id="droplet3" gradientUnits="userSpaceOnUse" x1="57.7054" y1="74.3552" x2="67.0347" y2="74.3552">
          <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}} />
          <stop  offset="0.5339" style={{stopColor:'#51B1CD'}} />
      </linearGradient>
      <path id="drop3" fill="url(#droplet3)" d="M62.3,67.2c0,0-10.4,14.3,0,14.3C72.9,81.5,62.3,67.2,62.3,67.2z"/>
  </g>
  <g id="bigCloud">
      
          <path id="XMLID_17_" fill="#F4F4F4" stroke="#515251" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="8.000000e-002" d="
          M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
          c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
  </g>
  </svg>
        </div>
    )
}

export default NightRain
