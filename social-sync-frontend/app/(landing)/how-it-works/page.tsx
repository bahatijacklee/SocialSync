"use client"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 dark:bg-purple-900 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">How SocialSync Works</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((step) => (
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
    </div>
  )
}

