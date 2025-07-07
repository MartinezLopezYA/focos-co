'use client';

export default function Contact() {
    return (
        <section className="flex flex-col h-full items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">We would love to hear from you!</p>
        <form className="w-full max-w-md">
            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Your Message"
                required
            ></textarea>
            </div>
            <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
            Send Message
            </button>
        </form>
        </section>
    );
}