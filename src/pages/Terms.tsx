import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";

const Terms = () => {
  return (
    <LegalPage title="Terms of Use" effectiveDate="September 25, 2026">
      <p>
        These terms apply to your use of this website, operated by the Center for Responsible AI in
        Education, Inc. (&ldquo;CRAIE&rdquo;, &ldquo;we&rdquo;). By using the site, you agree to them.
      </p>

      <div>
        <h2>Use of the site</h2>
        <p>
          You may use this site for lawful purposes only. Please do not submit false information
          through our forms, attempt to disrupt the site, or use it to send unsolicited messages.
        </p>
      </div>

      <div>
        <h2>Content</h2>
        <p>
          Unless stated otherwise, the content on this site belongs to CRAIE. You may share and
          reference it for non-commercial educational purposes with attribution to CRAIE. Any other
          use requires our written permission.
        </p>
      </div>

      <div>
        <h2>No professional advice</h2>
        <p>
          Information on this site is provided for general educational purposes. It is not legal,
          technical or other professional advice, and it may not suit every school or organization.
          You are responsible for how you apply it.
        </p>
      </div>

      <div>
        <h2>External links</h2>
        <p>
          This site may link to websites we do not operate. We are not responsible for their
          content or practices.
        </p>
      </div>

      <div>
        <h2>Disclaimer and limitation of liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; without warranties of any kind. To the extent
          permitted by law, CRAIE is not liable for any loss or damage arising from your use of the
          site or reliance on its content.
        </p>
      </div>

      <div>
        <h2>Privacy</h2>
        <p>
          How we handle information you send us is described in our{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Commonwealth of Massachusetts.</p>
      </div>

      <div>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms from time to time; the effective date above shows when they
          were last changed. Questions can be sent to{" "}
          <a href="mailto:info@craie.org">info@craie.org</a>.
        </p>
      </div>
    </LegalPage>
  );
};

export default Terms;
