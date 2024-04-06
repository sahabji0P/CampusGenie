// import React from 'react';
// import './LaundryHeader.css';

// const LaundryHeader = () => {
//   return (
//     <div className='Laundry-header'> {/* Changed className from 'header' to 'Laundry-header' */}
//       <div className="Laundry-header-contents"> {/* Changed className from 'header-contents' to 'Laundry-header-contents' */}
//         <h2>Get Your Laundry Done Hassle-Free</h2>
//         <p>Experience the convenience of our laundry services. Whether it's your everyday wear, delicate fabrics, or bulky items, we handle it all with care and efficiency. Say goodbye to laundry day stress and hello to freshly cleaned clothes delivered right to your doorstep.</p>
//         <button>Schedule Pickup</button>
//       </div>
//     </div>
//   );
// };

// export default LaundryHeader;



import React from 'react';
import './LaundryHeader.css';

const LaundryHeader = () => {
  return (
    <div className='Laundry-header'>
      <div className='Laundry-header-overlay'></div> {/* New overlay div */}
      <div className="Laundry-header-contents">
        <h2>Get Your Laundry Done Hassle-Free</h2>
        <p>Experience the convenience of our laundry services. Whether it's your everyday wear, delicate fabrics, or bulky items, we handle it all with care and efficiency. Say goodbye to laundry day stress and hello to freshly cleaned clothes delivered right to your doorstep.</p>
        <button onClick={()=>{window.location.href='/laundry/Pickup';}}>Schedule Pickup</button>
      </div>
    </div>
  );
};

export default LaundryHeader;
