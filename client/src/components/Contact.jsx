//Import Style
import "../styles/contact.scss"

export const Contact = () => {
  return (
    <div className="area-section" id="contact-me-section">
      <h1 className="section-header">Contact</h1>
      <p className="section-body">
        <ul id="contact-links">
          <li>LinkedIn : <a className="contact-link" href="https://www.linkedin.com/in/derine-banis-0913/">Derine Banis</a>
          </li>
          <li>Email : <a className="contact-link" href="mailto:d.banis.13@gmail.com">d.banis@gmail.com</a> </li>
          <li>
            GitHub : <a className="contact-link" href="https://github.com/Enired">Enired</a>
          </li>
        </ul>
      </p>
    </div>
  )
}