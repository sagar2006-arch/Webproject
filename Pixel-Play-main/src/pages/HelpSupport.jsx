const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-help text-white px-6 py-10">
      <div className="backdrop-blur-sm bg-black/90 p-6 rounded-xl max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Help & Support</h1>

        <p className="mb-8 text-lg text-gray-300 text-center">
          Welcome to PixelPlay Support. We're here to help you with your account, streaming, technical issues, and more.
        </p>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>How do I create an account?</strong>
              <p>Click on the Sign Up button on the homepage and fill out the registration form with your email and password.</p>
            </li>
            <li>
              <strong>How can I reset my password?</strong>
              <p>Go to the Login page and click on "Forgot Password" to receive a reset link via email.</p>
            </li>
            <li>
              <strong>Why isn’t my video loading?</strong>
              <p>Ensure you have a stable internet connection. If the problem persists, try refreshing or clearing your cache.</p>
            </li>
            <li>
              <strong>Can I use PixelPlay on multiple devices?</strong>
              <p>Yes! You can stream on multiple devices simultaneously depending on your membership plan.</p>
            </li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Basic Troubleshooting</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Clear your browser's cache and cookies</li>
            <li>Try using a different browser or device</li>
            <li>Check your internet speed and stability</li>
            <li>Update your browser to the latest version</li>
            <li>Disable any ad blockers or VPNs temporarily</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="text-gray-300 mb-2">
            If your issue isn't resolved, contact our support team:
          </p>
          <ul className="text-gray-300">
            <li>Email: <a href="mailto:support@pixelplay.com" className="text-blue-500 underline">support@pixelplay.com</a></li>
            <li>Live Chat: Available from 9 AM – 6 PM (Mon–Sat)</li>
            <li>Phone: +1 (800) 123-4567</li>
          </ul>
        </section>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PixelPlay. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
