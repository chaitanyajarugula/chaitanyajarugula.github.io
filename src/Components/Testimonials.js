import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-heading">
            <span className="text-neon-green">&lt;</span> reviews{" "}
            <span className="text-neon-green">/&gt;</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What People Say
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 card-glow flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <span className="font-mono text-3xl text-neon-cyan/30 leading-none">
                  &#123;&#47;*
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-dark-700">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-neon-cyan/20"
                />
                <div>
                  <p className="text-white font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-xs text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
