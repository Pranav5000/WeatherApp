import React from 'react'
import './Weather2.css'

const ThunderRain = () => {
    return (
        <div>
        <svg version="1.1" className="svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
   {/*
<g id="sunRays">
       <radialGradient id="XMLID_4_" cx="51.1566" cy="21.1667" r="4.7267" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_3_" fill="url(#XMLID_4_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"/>
       <radialGradient id="XMLID_12_" cx="71.2457" cy="29.7708" r="6.0292" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_5_" fill="url(#XMLID_12_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"/>
       <radialGradient id="XMLID_13_" cx="79.016" cy="49.1667" r="4.757" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_6_" fill="url(#XMLID_13_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"/>
       <radialGradient id="XMLID_14_" cx="70.2457" cy="69.6002" r="6.0234" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_7_" fill="url(#XMLID_14_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"/>
       
           <radialGradient id="XMLID_15_" cx="50.7987" cy="78.0712" r="4.7789" gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_8_" fill="url(#XMLID_15_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"/>
       <radialGradient id="XMLID_16_" cx="30.5864" cy="70.2252" r="6.0153" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_9_" fill="url(#XMLID_16_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"/>
       <radialGradient id="XMLID_44_" cx="21.0871" cy="50" r="4.8093" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_10_" fill="url(#XMLID_44_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"/>
       <radialGradient id="XMLID_45_" cx="29.9614" cy="29.0073" r="6.019" gradientUnits="userSpaceOnUse">
           <stop  offset="0.3333" style={{stopColor:'#FBD25A'}}/>
           <stop  offset="0.7581" style={{stopColor:'#FAD45D'}}/>
           <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
       </radialGradient>
       
           <path id="XMLID_11_" fill="url(#XMLID_45_)" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" d="
           M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"/>
   <radialGradient id="XMLID_46_" cx="50" cy="49.1667" r="26.8776" gradientUnits="userSpaceOnUse">
       <stop  offset="0.3333" style={{stopColor:'#E3BF4C'}}/>
       <stop  offset="0.7473" style={{stopColor:'#F4CE52'}}/>
       <stop  offset="1" style={{stopColor:'#F5E16E'}}/>
   </radialGradient>
   <ellipse id="XMLID_1_" fill="url(#XMLID_46_)" stroke="#58595B" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="7.000000e-002" cx="50" cy="49.2" rx="27.3" ry="26.5"/>
   </g>
*/}
   
   
   <g id="raindrops">
       <linearGradient id="XMLID_30_" gradientUnits="userSpaceOnUse" x1="29.1887" y1="74.3552" x2="38.518" y2="74.3552">
           <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}}/>
           <stop  offset="0.5339" style={{stopColor:'#51B1CD'}}/>
       </linearGradient>
       <path id="drop1" fill="url(#XMLID_30_)" d="M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"/>
       <linearGradient id="XMLID_31_" gradientUnits="userSpaceOnUse" x1="59.7054" y1="74.3552" x2="69.0347" y2="74.3552">
           <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}}/>
           <stop  offset="0.5339" style={{stopColor:'#51B1CD'}}/>
       </linearGradient>
       <path id="drop2" fill="url(#XMLID_31_)" d="M64.3,67.2c0,0-10.4,14.3,0,14.3C74.9,81.5,64.3,67.2,64.3,67.2z"/>
       <linearGradient id="XMLID_31_" gradientUnits="userSpaceOnUse" x1="40.7054" y1="74.3552" x2="49.0347" y2="74.3552">
           <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}}/>
           <stop  offset="0.5339" style={{stopColor:'#51B1CD'}}/>
       </linearGradient>
       <path id="drop3" fill="url(#XMLID_30_)" d="M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"/>
       <linearGradient id="XMLID_31_" gradientUnits="userSpaceOnUse" x1="24.7054" y1="74.3552" x2="32.0347" y2="74.3552">
           <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}}/>
           <stop  offset="0.5339" style={{stopColor:'#51B1CD'}}/>
       </linearGradient>
       <path id="drop4" fill="url(#XMLID_30_)" d="M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"/>
       </g>
   -->
   <g id="thunder">
       <polygon fill="#FAC73F" points="45.6,61.5 39.4,77.6 47.6,77.4 43.1,91.9 44.3,91.9 59.3,73.5 51.4,73.4 58.7,61.5 	"/>
   </g>
   <g id="smallcloud">
       
           <path id="XMLID_3_" fill="#F4F4F4" stroke="#6D6E71" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="8.000000e-002" d="
           M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
           c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"/>
   </g>
   <g id="bigClouds">
       
           <path id="XMLID_16_" fill="#F4F4F4" stroke="#515251" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="8.000000e-002" d="
           M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
           c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
   </g>
   </svg>
        </div>
    )
}

export default ThunderRain
