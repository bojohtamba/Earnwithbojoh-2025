import React from 'react'

export function Hotels(){
  const items = [
    { name: 'Douala Business Hotel ★★★★', where: 'Bonanjo, Douala', price: 'from 45,000 XAF/night' },
    { name: 'Yaoundé City Stay ★★★', where: 'Mfoundi', price: 'from 30,000 XAF/night' },
    { name: 'Kribi Beach Resort ★★★★', where: 'Kribi', price: 'from 55,000 XAF/night' },
  ]
  return (
    <div className="grid cols-3">
      {items.map((h)=> (
        <div className="card" key={h.name}>
          <div style={{height:140,background:'#e5e7eb',borderRadius:12,display:'grid',placeItems:'center',color:'#6b7280'}}>Hotel Image</div>
          <h4 style={{marginTop:8}}>{h.name}</h4>
          <p style={{color:'#6b7280',fontSize:14}}>{h.where} — {h.price}</p>
          <a href="https://www.booking.com" target="_blank" rel="noreferrer" className="btn" style={{marginTop:8}}>View on Booking.com</a>
        </div>
      ))}
    </div>
  )
}
