import { HASHTAGS } from '../data'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">Urban Donut Co</div>
      <p>Groovy rings in a ruined city under a gold beam.</p>
      <p className="footer-tags">{HASHTAGS.join(' · ')}</p>
    </footer>
  )
}
