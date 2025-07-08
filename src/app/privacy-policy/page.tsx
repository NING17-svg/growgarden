import { Metadata } from 'next';

// 设置页面的元数据，用于SEO优化
export const metadata: Metadata = {
  title: 'Privacy Policy | Grow A Garden | growgarden.run',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information when you use the Grow A Garden website. Learn about data collection, cookies, and your rights.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Grow A Garden | growgarden.run',
    description: 'Our privacy policy outlines how we collect, use, and protect your personal information when you use the Grow A Garden website.',
    url: 'https://growgarden.run/privacy-policy',
    siteName: 'Grow A Garden',
    locale: 'en_US',
    type: 'website',
  },
};

// 隐私政策页面组件
export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          
          <div className="text-gray-500 mb-8 flex items-center justify-center">
            <span>Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="introduction" className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to Grow A Garden (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and providing a safe online experience for all our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website growgarden.run, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;).
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 id="information-we-collect" className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <h3 id="personal-data" className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
            <p>
              We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features, or resources we make available on our Site. You may be asked for, as appropriate:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email address</li>
              <li>Username</li>
              <li>IP address</li>
            </ul>
            <p>
              We will collect personal identification information from you only if you voluntarily submit such information to us. You can always refuse to supply personal identification information, except that it may prevent you from engaging in certain Site-related activities.
            </p>

            <h3 id="non-personal-data" className="text-xl font-semibold mt-6 mb-3">Non-Personal Data</h3>
            <p>
              We may collect non-personal identification information about you whenever you interact with our Site. Non-personal identification information may include your browser name, the type of computer you use, technical information about your means of connection to our Site, such as the operating system and the Internet service providers utilized, and other similar information.
            </p>

            <h2 id="web-browser-cookies" className="text-2xl font-semibold mt-8 mb-4">Web Browser Cookies</h2>
            <p>
              Our Site may use &quot;cookies&quot; to enhance your experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
            </p>

            <h2 id="google-analytics" className="text-2xl font-semibold mt-8 mb-4">Google Analytics</h2>
            <p>
              We use Google Analytics to help us understand how our customers use the Site. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
            </p>
            <p>
              You can opt-out of having your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
            </p>
            <p>
              For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer nofollow">https://policies.google.com/privacy</a>
            </p>

            <h2 id="how-we-use-collected-information" className="text-2xl font-semibold mt-8 mb-4">How We Use Collected Information</h2>
            <p>
              Grow A Garden may collect and use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>To improve our Site</strong>: We may use feedback you provide to improve our products and services.</li>
              <li><strong>To personalize user experience</strong>: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li><strong>To send periodic emails</strong>: We may use the email address to respond to inquiries, questions, and/or other requests.</li>
            </ul>

            <h2 id="how-we-protect-your-information" className="text-2xl font-semibold mt-8 mb-4">How We Protect Your Information</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
            </p>

            <h2 id="sharing-your-personal-information" className="text-2xl font-semibold mt-8 mb-4">Sharing Your Personal Information</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
            </p>

            <h2 id="third-party-websites" className="text-2xl font-semibold mt-8 mb-4">Third-Party Websites</h2>
            <p>
              Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website&apos;s own terms and policies.
            </p>

            <h2 id="changes-to-this-privacy-policy" className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              Grow A Garden has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
            </p>

            <h2 id="your-acceptance-of-these-terms" className="text-2xl font-semibold mt-8 mb-4">Your Acceptance of These Terms</h2>
            <p>
              By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
            </p>

            <h2 id="contacting-us" className="text-2xl font-semibold mt-8 mb-4">Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:contact@growgarden.run">contact@growgarden.run</a>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
} 