import { useState } from 'react';

export default function Calendar() {
  const [reservationIFramStyle, setReservationIFramStyle] = useState({
    left: '0.5vw',
    top: '82%',
    width: '23vw',
    height: '72vh',
  });

  return <iframe
  style={{
    position: 'absolute',
    transform: 'scale(.8)',
    zIndex:"100",
    ...reservationIFramStyle,
  }}
  width='100%'
  height='100%'
  frameBorder='0'
  src='https://widget.reserveout.com/en/rowidget?key=zyiHvuKgJSHhKrxwi&amp;vi=4070001'
/>
}
