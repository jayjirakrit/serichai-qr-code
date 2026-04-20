import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export default function VestsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl">👕</span>
            <h1 className="text-3xl md:text-4xl font-bold">Premium Shirts - Care & Style Guide</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Complete instructions for shirt care, sizing, and maintenance
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Shirts</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-1">📏</div>
                <div className="text-sm text-gray-600">Sizes</div>
                <div className="font-semibold">XS-3XL</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-1">🧵</div>
                <div className="text-sm text-gray-600">Material</div>
                <div className="font-semibold">100% Cotton</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-1">💧</div>
                <div className="text-sm text-gray-600">Wash</div>
                <div className="font-semibold">Cold Only</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-1">✨</div>
                <div className="text-sm text-gray-600">Care</div>
                <div className="font-semibold">Easy</div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Product Overview
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 md:h-96 bg-gray-100">
                <Image
                  src="/images/shirts/shirt-overview.jpg"
                  alt="Premium shirt collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our premium shirt collection combines timeless style with modern comfort. 
                  Each shirt is crafted from 100% combed cotton, ensuring breathability and durability. 
                  Whether you prefer a classic, slim, or oversized fit, our collection has the perfect 
                  shirt for every occasion.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="text-sm font-semibold text-blue-800 uppercase mb-2">📝 Note</h4>
                  <p className="text-sm text-blue-700">
                    All shirts are pre-shrunk and ready to wear immediately after purchase.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sizing Section */}
          <section id="sizing" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Size Guide & Measurements
            </h2>
            
            {/* How to Measure */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Measure</h3>
              <p className="text-gray-700 mb-4">
                For the most accurate fit, measure a shirt you already own and love, 
                or measure your body directly following these guidelines:
              </p>
              <ul className="space-y-3">
                {[
                  'Chest: Measure under arms around the fullest part',
                  'Length: Measure from highest point of shoulder to bottom hem',
                  'Sleeve: Measure from shoulder seam to cuff edge',
                  'Shoulder: Measure from shoulder seam to shoulder seam across back'
                ].map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Size Chart (Inches)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Chest</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Length</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ['XS', '36-38"', '27"', '24"'],
                      ['S', '38-40"', '28"', '24.5"'],
                      ['M', '40-42"', '29"', '25"'],
                      ['L', '42-44"', '30"', '25.5"'],
                      ['XL', '44-46"', '31"', '26"'],
                      ['2XL', '46-48"', '32"', '26.5"'],
                      ['3XL', '48-50"', '33"', '27"']
                    ].map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-3 text-sm text-gray-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Care Instructions */}
          <section id="care" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Washing & Care Instructions
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Care</h3>
              <ol className="space-y-4">
                {[
                  'Turn shirts inside out before washing to protect the fabric surface',
                  'Machine wash cold (30°C/86°F) with similar colors',
                  'Use mild detergent only - never use bleach or fabric softener',
                  'Tumble dry on low heat or hang dry for best results',
                  'Remove promptly from dryer to prevent wrinkles',
                  'Iron on medium heat while shirt is slightly damp',
                  'Store folded in drawer or on padded hangers'
                ].map((step, i) => (
                  <li key={i} className="flex">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <h4 className="text-sm font-semibold text-red-800 uppercase mb-2">⚠️ Warning</h4>
              <p className="text-sm text-red-700">
                Never use fabric softener on premium cotton shirts. It coats the fibers and reduces breathability.
              </p>
            </div>

            {/* Care Symbols */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Label Symbols Explained</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '💧', label: 'Machine Wash Cold', desc: '30°C max' },
                  { icon: '🚫', label: 'No Bleach', desc: 'Use mild detergent' },
                  { icon: '🌡️', label: 'Low Heat Dry', desc: 'Tumble dry low' },
                  { icon: '🔧', label: 'Medium Iron', desc: '150°C max' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-medium text-sm text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stain Removal */}
          <section id="stains" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Stain Removal Guide
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {[
                  {
                    stain: 'Oil & Grease',
                    solution: 'Apply cornstarch or baking soda. Let sit for 15 minutes, brush off, then wash normally.'
                  },
                  {
                    stain: 'Coffee & Tea',
                    solution: 'Rinse immediately with cold water. Apply liquid detergent directly, then wash.'
                  },
                  {
                    stain: 'Ink',
                    solution: 'Apply rubbing alcohol to a cotton ball and dab gently. Rinse with cold water.'
                  },
                  {
                    stain: 'Wine',
                    solution: 'Cover with salt immediately to absorb. Rinse with cold water, then wash.'
                  },
                  {
                    stain: 'Blood',
                    solution: 'Soak in cold water with salt. Never use hot water as it sets the stain.'
                  },
                  {
                    stain: 'Sweat Stains',
                    solution: 'Make paste with baking soda and water. Apply for 30 mins before washing.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.stain}</h4>
                    <p className="text-sm text-gray-700">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 bg-yellow-50 p-3 rounded border border-yellow-200">
              <span className="font-semibold">💡 Tip:</span> Always test stain removers on an inside seam first.
            </div>
          </section>

          {/* Storage Tips */}
          <section id="storage" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Storage Recommendations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📦</span>
                  Folding Method
                </h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Button the top button and lay shirt face down</li>
                  <li>2. Fold sleeves inward toward the center</li>
                  <li>3. Fold sides toward center, about 1/3 of width</li>
                  <li>4. Fold bottom up to collar in thirds</li>
                  <li>5. Store folded shirts vertically for easy access</li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">👔</span>
                  Hanging Method
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Use wooden or padded hangers</li>
                  <li>• Button top button to maintain shape</li>
                  <li>• Leave space between hangers for air circulation</li>
                  <li>• Avoid wire hangers - they distort shoulders</li>
                  <li>• Use garment bags for long-term storage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seasonal Care */}
          <section id="seasonal" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Seasonal Care Tips
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">☀️ Summer Care</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Wash more frequently due to sweat and sunscreen</li>
                    <li>• Hang dry in shade to prevent fading</li>
                    <li>• Store in breathable cotton bags</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">❄️ Winter Care</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Layer with undershirts to reduce washing frequency</li>
                    <li>• Use cedar blocks to repel moths</li>
                    <li>• Avoid storing near radiators or heat sources</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Frequently Asked Questions
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
              {[
                {
                  q: 'Will my shirt shrink after washing?',
                  a: 'Our shirts are pre-shrunk during manufacturing. Following care instructions will result in minimal (less than 2%) shrinkage.'
                },
                {
                  q: 'Can I use fabric softener?',
                  a: 'No, fabric softener is not recommended as it can coat cotton fibers and reduce breathability and absorbency.'
                },
                {
                  q: 'How do I prevent collar curling?',
                  a: 'Always button the top button before washing and ironing. Remove collar stays before washing and reinsert after ironing.'
                },
                {
                  q: 'What if I received the wrong size?',
                  a: 'We offer free exchanges within 30 days. Shirts must be unworn with original tags attached.'
                }
              ].map((item, i) => (
                <div key={i} className="p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Q: {item.q}</h4>
                  <p className="text-gray-700">A: {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need Additional Help?</h3>
            <p className="text-gray-700 mb-4">
              Our support team is available Monday-Friday, 9am-6pm EST
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@example.com" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                📧 Email Support
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                📞 Call Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
