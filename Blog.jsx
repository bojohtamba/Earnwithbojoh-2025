import React from 'react'

export function Blog(){
  const posts = [
    { title: 'Make Money With Your Phone in 2025', desc: 'Fast, practical methods to get your first earnings.', url: 'https://bojohtamba.netlify.app' },
    { title: 'Affiliate Links: Best Practices', desc: 'Placement, tracking, and disclosures that convert.', url: 'https://bojohtamba.netlify.app' },
    { title: 'Low‑Cost Hotels in Cameroon', desc: 'Top picks per region for budget travelers.', url: 'https://bojohtamba.netlify.app' },
  ]
  return (
    <div className="grid cols-3">
      {posts.map(p => (
        <article className="card" key={p.title}>
          <h4>{p.title}</h4>
          <p style={{color:'#6b7280',fontSize:14}}>{p.desc}</p>
          <a className="btn" href={p.url} target="_blank" rel="noreferrer" style={{marginTop:8}}>Read post</a>
        </article>
      ))}
    </div>
  )
}
