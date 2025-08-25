import React from 'react'
import { AffiliateLinks } from './components/AffiliateLinks.jsx'
import { Hotels } from './components/Hotels.jsx'
import { Blog } from './components/Blog.jsx'

export default function App(){
  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="badge">EB</span>
            <strong>EarnWithBojoh</strong>
          </div>
          <nav className="hide-mobile">
            <a href="#hotels" style={{marginRight:12}}>Hotels</a>
            <a href="#crypto" style={{marginRight:12}}>Crypto</a>
            <a href="#blog">Blog</a>
          </nav>
          <a href="#cta" className="btn">Start Earning</a>
        </div>
      </header>

      <section className="container" style={{padding:'48px 0'}}>
        <h1 style={{fontSize:38,margin:'8px 0'}}>Turn your phone into an income engine</h1>
        <p style={{color:'#6b7280',maxWidth:640}}>Get guides, templates, and affiliate-ready pages to start earning today.</p>
        <div style={{marginTop:16,display:'flex',gap:12,flexWrap:'wrap'}}>
          <a className="btn" href="#hotels">Explore Services</a>
          <a className="btn secondary" href="https://bojohtamba.netlify.app" target="_blank">Visit the Blog</a>
        </div>
        <div className="card" style={{marginTop:20}}>
          <div style={{position:'relative',paddingTop:'56%'}}>
            <iframe title="Intro" src="https://www.youtube.com/embed/dQw4w9WgXcQ" style={{position:'absolute',inset:0,width:'100%',height:'100%',border:0,borderRadius:12}} allowFullScreen />
          </div>
        </div>
      </section>

      <section id="hotels" className="container" style={{padding:'24px 0'}}>
        <h2>Hotels & Travel</h2>
        <Hotels />
      </section>

      <section id="crypto" className="container" style={{padding:'24px 0'}}>
        <h2>Crypto & Finance</h2>
        <AffiliateLinks />
      </section>

      <section id="blog" className="container" style={{padding:'24px 0'}}>
        <h2>Latest from the blog</h2>
        <Blog />
      </section>

      <section id="cta" className="container" style={{padding:'24px 0'}}>
        <div className="card">
          <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll email you the starter kit.")}}>
            <label style={{fontSize:14,color:'#6b7280'}}>Your email</label>
            <input required type="email" placeholder="you@example.com" style={{marginTop:6,width:'100%',padding:'12px 14px',border:'1px solid #e5e7eb',borderRadius:12}} />
            <button className="btn" type="submit" style={{marginTop:12}}>Send me the starter kit</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <p>© {new Date().getFullYear()} Earn With Bojoh</p>
          <a className="btn secondary" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
