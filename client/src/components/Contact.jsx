//Import Style
import { useSlotProps } from "@mui/base";
import "../styles/contact.scss"

export const Contact = (props) => {
  return (
    <div className="area-section" id="contact-me-section" ref={props.contactRef}>
      <h1 className="section-header">Contact</h1>
      <div className="section-body">
        <ul id="contact-links">
          <li>LinkedIn : <a className="contact-link" href="https://www.linkedin.com/in/derine-banis-0913/">Derine Banis</a>
          </li>
          <li>Email : <a className="contact-link" href="mailto:d.banis.13@gmail.com">d.banis@gmail.com</a> </li>
          <li>
            GitHub : <a className="contact-link" href="https://github.com/Enired">Enired</a>
          </li>
        </ul>
      </div>
    </div>
  )
}