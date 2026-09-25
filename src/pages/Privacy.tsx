import LegalPage from "@/components/LegalPage";

const Privacy = () => {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="September 25, 2026">
      <p>
        This policy explains what information the Center for Responsible AI in Education, Inc.
        (&ldquo;CRAIE&rdquo;, &ldquo;we&rdquo;) collects through this website and how we use it.
      </p>

      <div>
        <h2>Information we collect</h2>
        <p className="mb-3">
          We only collect information you choose to send us through the forms on this site:
        </p>
        <ul>
          <li>Contact form: your name, email address, subject and message.</li>
          <li>
            Volunteer sign-up: your name, email address, and optionally your phone number,
            experience, availability and areas of interest.
          </li>
          <li>
            Partnership request: your organization name, contact name, email address, and
            optionally your phone number, organization type, interest and description.
          </li>
        </ul>
        <p className="mt-3">
          This site does not use analytics or advertising trackers and does not set its own
          cookies. Our hosting provider may automatically record standard technical information,
          such as IP address and browser type, when you visit.
        </p>
      </div>

      <div>
        <h2>How we use it</h2>
        <p>
          We use the information you send to respond to you, to consider volunteer applications
          and partnership requests, and to keep in touch about related CRAIE work. We do not sell
          or rent your information.
        </p>
      </div>

      <div>
        <h2>Service providers</h2>
        <p>
          Form submissions are processed by{" "}
          <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer">
            FormSubmit
          </a>
          , which delivers them to our email. Their handling of the data is covered by their own
          privacy policy.
        </p>
      </div>

      <div>
        <h2>Your choices</h2>
        <p>
          You can ask us to access, correct or delete the information you have sent us, or to stop
          contacting you, by emailing <a href="mailto:info@craie.org">info@craie.org</a>.
        </p>
      </div>

      <div>
        <h2>Children</h2>
        <p>
          This site is intended for educators, organizations and adult volunteers. We do not
          knowingly collect information from children under 13.
        </p>
      </div>

      <div>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The effective date above shows when it was
          last changed.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Center for Responsible AI in Education, Inc.
          <br />
          867 Boylston St, 5th Floor, Boston, MA 02116
          <br />
          <a href="mailto:info@craie.org">info@craie.org</a>
        </p>
      </div>
    </LegalPage>
  );
};

export default Privacy;
