import { Metadata } from 'next';

// 设置页面的元数据，用于SEO优化
export const metadata: Metadata = {
  title: 'Terms of Service | Grow A Garden | growgarden.run',
  description: 'Read the terms of service for using the Grow A Garden website. Understand your rights and responsibilities when accessing our guides, tools, and resources.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Terms of Service | Grow A Garden | growgarden.run',
    description: 'Read the terms of service for using the Grow A Garden website. Understand your rights and responsibilities when accessing our resources.',
    url: 'https://growgarden.run/terms-of-service',
    siteName: 'Grow A Garden',
    locale: 'en_US',
    type: 'website',
  },
};

// 用户条款页面组件
export default function TermsOfServicePage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms of Service</h1>
          
          <div className="text-gray-500 mb-8 flex items-center justify-center">
            <span>Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="acceptance-of-terms" className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using growgarden.run (the &quot;Site&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Site&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 id="description-of-service" className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p>
              Our Site provides comprehensive guides, databases, tools, and other resources related to the Roblox game &quot;Grow A Garden.&quot; The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We disclaim all responsibility and liability for the availability, timeliness, security, or reliability of the Service. We also reserve the right to modify, suspend, or discontinue the service with or without notice at any time and without any liability to you.
            </p>

            <h2 id="intellectual-property" className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality are owned by Grow A Garden and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. All content on this site, including text, graphics, logos, and images, is our property or the property of our content suppliers and is protected by international copyright laws.
            </p>
            <p>
              This site, growgarden.run, is a fan-made website and is not affiliated with, endorsed by, or sponsored by MiniPoP Games or the creators of the Roblox game &quot;Grow A Garden.&quot;
            </p>

            <h2 id="user-conduct" className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p>
              You agree not to use the Site to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Engage in any activity that is unlawful, harmful, or threatening.</li>
              <li>Attempt to gain unauthorized access to our computer systems or engage in any activity that disrupts, diminishes the quality of, interferes with the performance of, or impairs the functionality of, the Service.</li>
              <li>Use any automated means, including spiders, robots, crawlers, data mining tools, or the like to download data from the Site, unless expressly permitted by us.</li>
              <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without our express written permission.</li>
            </ul>

            <h2 id="disclaimer-of-warranties" className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              The Site is provided &quot;as is.&quot; We make no warranty that the site will meet your requirements, be uninterrupted, timely, secure, or error-free. You understand and agree that any material and/or data downloaded or otherwise obtained through the use of the service is done at your own discretion and risk. We and our suppliers disclaim all warranties of any kind, express or implied, including without limitation any warranty of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2 id="limitation-of-liability" className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall we or our suppliers be liable for any indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if we have been advised of the possibility of such damages), resulting from the use or the inability to use the service.
            </p>

            <h2 id="third-party-links" className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
            <p>
              The Site may provide links to other websites or resources. Because we have no control over such sites and resources, you acknowledge and agree that we are not responsible for the availability of such external sites or resources and do not endorse and are not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources.
            </p>

            <h2 id="changes-to-the-terms" className="text-2xl font-semibold mt-8 mb-4">8. Changes to the Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms of Service by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Service. Please review this Agreement periodically for changes.
            </p>

            <h2 id="contacting-us" className="text-2xl font-semibold mt-8 mb-4">9. Contacting Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at: <a href="mailto:contact@growgarden.run">contact@growgarden.run</a>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
} 