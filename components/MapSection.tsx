export default function MapSection() {
  return (
    <section aria-label="Office location">
      <div className="bg-[#111111] px-4 sm:px-6 pt-10 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-gray-400 text-xs uppercase tracking-widest mb-1 font-semibold">
            Our Office
          </div>
          <div className="text-gray-300 text-sm mb-3">
            3580 Wilshire Blvd., 17th Floor &mdash; Los Angeles, California 90010
          </div>
        </div>
      </div>
      <div className="w-full h-72 md:h-96">
        <iframe
          title="Law Offices of Jack D. Josephson — Los Angeles"
          src="https://maps.google.com/maps?q=3580+Wilshire+Blvd+Los+Angeles+CA+90010&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
