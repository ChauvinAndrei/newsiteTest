// import { useState, useRef } from 'react';

// export function useActiveMenu() {
//     const [activeIndex, setActiveIndex] = useState(-1);
//     const [returnToInactive, setReturnToInactive] = useState(false);
//     const activeRefs = useRef([]);
  
//     const handleMenuItemClick = (index) => {
//       setActiveIndex(index);
//       setReturnToInactive(true);
//     };
  
//     return { activeIndex, returnToInactive, activeRefs, handleMenuItemClick };
//   }