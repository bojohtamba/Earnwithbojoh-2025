import React from 'react'

export function AffiliateLinks(){
  const links = [
    { label: 'Join Binance (referral)', href: 'https://www.binance.com/referral/earn-together/refertoearn2000usdc/claim?hl=en&ref=GRO_14352_ZZCQ0&utm_source=referralmode' },
    { label: 'IziChange — Mobile Money ⇄ Crypto', href: 'https://izichange.com/sign-up?ref=601667' }
  ]

  const onClick = (href) => {
    console.log('Affiliate click:', href) // replace with analytics/event call
  }

  return (
    <ul style={{paddingLeft:16}}>
      {links.map((l)=> (
        <li key={l.href} style={{margin:'8px 0'}}>
          <a href={l.href} target="_blank" rel="noreferrer" onClick={()=>onClick(l.href)}>{l.label}</a>
        </li>
      ))}
    </ul>
  )
}
