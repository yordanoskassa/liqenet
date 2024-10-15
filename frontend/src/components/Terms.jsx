import './Terms.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="terms term-body">

        <h1>Terms of Service</h1>
        <p><strong>Effective Date:</strong> 10/3/2024</p>
        <p>Welcome to Liqenet, an online platform providing Amharic language education to children aged 4 and above, through virtual instruction by teachers outsourced from Ethiopia. By accessing or using our platform, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any of these terms, please do not use our services.</p>

        <h2>1. Eligibility</h2>
        <h3>1.1. Age Requirement:</h3>
        <p>Liqenet is available for use by children aged 4 and older, under the supervision of a parent or legal guardian.</p>
        <h3>1.2. Parent/Guardian Responsibility:</h3>
        <p>Parents or legal guardians are responsible for overseeing the use of the platform by minors and ensuring compliance with these Terms.</p>

        <h2>2. Services Provided</h2>
        <h3>2.1. Amharic Language Instruction:</h3>
        <p>Liqenet connects children with qualified teachers from Ethiopia for virtual lessons.</p>
        <h3>2.2. Learning Materials:</h3>
        <p>The platform offers supplementary learning materials, including lesson plans, worksheets, and progress reports.</p>
        <h3>2.3. Learning Dashboard:</h3>
        <p>Parents/guardians have access to a learning dashboard, which tracks their child’s progress, scheduled meeting times, and other relevant details.</p>

        <h2>3. User Accounts</h2>
        <h3>3.1. Registration:</h3>
        <p>To access our services, parents/guardians must create an account. By registering, you agree to provide accurate and complete information.</p>
        <h3>3.2. Account Security:</h3>
        <p>You are responsible for maintaining the confidentiality of your account login credentials and for all activities under your account.</p>
        <h3>3.3. Account Suspension/Termination:</h3>
        <p>Liqenet reserves the right to suspend or terminate accounts in cases of violation of these Terms or for any reason deemed necessary by Liqenet.</p>

        <h2>4. Payments</h2>
        <h3>4.1. Fees:</h3>
        <p>The platform offers various subscription and payment plans for lessons. All fees are clearly displayed and must be paid in advance to access services.</p>
        <h3>4.2. Payment Methods:</h3>
        <p>We accept payments through credit cards and other secure payment gateways. Payment processing is managed by third-party services and is subject to their terms and conditions.</p>
        <h3>4.3. Refunds:</h3>
        <p>Refunds may be issued under certain circumstances as specified in our Refund Policy, which is available separately.</p>
        <h3>4.4. Refund Policy:</h3>
        <p>Refunds may be issued under the following conditions:</p>
        <ul>
            <li>Technical Issues: If technical problems prevent access to scheduled lessons.</li>
            <li>Cancellation Requests: Cancellations made within 72 hours before the scheduled class may be eligible for a refund.</li>
        </ul>
        <p>Refund requests must be submitted through our support team within 48 hours of the event. We reserve the right to review and approve refund requests on a case-by-case basis. Refunds will be processed within 14 days and returned to the original payment method.</p>

        <h2>5. Teacher Services</h2>
        <h3>5.1. Teacher Outsourcing:</h3>
        <p>Teachers are independent contractors based in Ethiopia. They are carefully selected and screened by Liqenet, but the platform does not guarantee any specific teacher.</p>
        <h3>5.2. Class Scheduling:</h3>
        <p>Parents/guardians can schedule classes based on availability through the platform. Any changes or cancellations must be made in accordance with our Cancellation Policy.</p>
        <h3>5.3. Teacher Communication:</h3>
        <p>Communication with teachers is conducted exclusively through the platform. Any exchange of personal contact information (such as phone numbers, email addresses, or social media accounts) between teachers and parents/guardians is strictly prohibited. This policy is in place to protect the privacy and security of all parties. Any violation of this rule may result in the suspension or termination of your account.</p>

        <h2>6. User Conduct</h2>
        <h3>6.1. Prohibited Activities:</h3>
        <p>Users must not engage in any illegal activities, harassment, abuse, or inappropriate behavior on the platform. This includes but is not limited to:</p>
        <ul>
            <li>Infringing on the rights of others</li>
            <li>Posting offensive or harmful content</li>
            <li>Disrupting the normal flow of communication or services</li>
            <li>Circumventing platform security</li>
        </ul>
        <h3>6.2. Monitoring:</h3>
        <p>Liqenet reserves the right to monitor user activity for the purpose of ensuring compliance with these Terms.</p>

        <h2>7. Privacy Policy</h2>
        <p>Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.</p>

        <h2>8. Intellectual Property</h2>
        <h3>8.1. Ownership:</h3>
        <p>All content, including logos, text, software, and designs, is the property of Liqenet and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our permission.</p>
        <h3>8.2. User Content:</h3>
        <p>Any content you submit to the platform (e.g., reviews, comments) remains your property, but you grant Liqenet a non-exclusive, royalty-free license to use it for the purposes of promoting or improving our services.</p>

        <h2>9. Disclaimers</h2>
        <h3>9.1. No Guarantee:</h3>
        <p>Liqenet does not guarantee any specific learning outcomes or results. The progress of each child depends on individual effort, participation, and external factors.</p>
        <h3>9.2. Third-Party Services:</h3>
        <p>Liqenet may provide links to third-party websites or services. We are not responsible for the content or practices of these external sites.</p>

        <h2>10. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Liqenet is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the platform, including but not limited to:</p>
        <ul>
            <li>Loss of data</li>
            <li>Financial loss</li>
            <li>Personal injury</li>
            <li>Misuse of platform services by third parties</li>
        </ul>

        <h2>11. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, United States, without regard to its conflict of law principles.</p>

        <h2>12. Modifications to Terms</h2>
        <p>Liqenet reserves the right to modify these Terms at any time. Any changes will be communicated through the platform, and continued use of our services constitutes acceptance of the revised Terms.</p>

        <h2>13. Contact Information</h2>
        <p>If you have any questions or concerns regarding these Terms, please contact us at:</p>
        <p>Email: info@liqenet <br />
        Address: Allendale, Michigan</p>

      </div>
      <Footer />
    </>
  );
};

export default Terms;
