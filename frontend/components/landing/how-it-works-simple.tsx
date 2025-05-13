"use client"

export default function HowItWorksSimple() {
  return (
    <section id="how-it-works" className="py-20 bg-purple-100 dark:bg-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SocialSync Works</h2>
          <p className="text-lg max-w-2xl mx-auto">
            From account creation to performance analysis - explore our seamless end-to-end workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">{step}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Step {step}</h3>
              <p>This is a simple description for step {step} of the process.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

