import { CAMPAIGN, HASHTAGS } from '../data'

export function Campaign() {
  return (
    <section
      className="campaign-section"
      id="wide-wonder"
      aria-labelledby="campaign-heading"
    >
      <div className="section-head left">
        <p className="eyebrow">TikTok · Silent film</p>
        <h2 id="campaign-heading">Wide Wonder</h2>
        <p>
          Cosmic origin-story walk. New on-screen line daily. Old pizza lines
          struck through.
        </p>
      </div>
      <ul className="hashtags" aria-label="Campaign hashtags">
        {HASHTAGS.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <ol className="campaign-list">
        {CAMPAIGN.map((post) => (
          <li key={post.day} className="campaign-item">
            <div className="campaign-meta">
              <span>{post.day}</span>
              <span>{post.time}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.caption}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
