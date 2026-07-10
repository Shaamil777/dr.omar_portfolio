import TestimonialCard from './TestimonialCard';

export default function StaticCardStack() {
  return (
    <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none mt-12">
      {/* Left Card */}
      <TestimonialCard
        quote="An absolute game changer for our business. We saw immediate results and our workflow has never been smoother."
        name="Sarah Jenkins"
        role="Product Designer"
        country="UK"
        avatarUrl="https://i.pravatar.cc/150?u=sarah"
        flagUrl="/flags/gb.svg"
        className="left-1/2 top-1/2 z-10 pointer-events-auto"
        style={{ transform: 'translate(-50%, -50%) translate(-350px, 20px) rotate(-12deg) scale(0.9)' }}
      />

      {/* Right Card */}
      <TestimonialCard
        quote="The attention to detail and level of polish is unmatched in the industry. It’s simply phenomenal work."
        name="Michael Chen"
        role="Engineering Manager"
        country="Canada"
        avatarUrl="https://i.pravatar.cc/150?u=michael"
        flagUrl="https://flagcdn.com/ca.svg"
        className="left-1/2 top-1/2 z-10 pointer-events-auto"
        style={{ transform: 'translate(-50%, -50%) translate(350px, 20px) rotate(12deg) scale(0.9)' }}
      />

      {/* Center Card */}
      <TestimonialCard
        quote="This was the best decision we made all year. The quality exceeded our highest expectations by a mile."
        name="Elena Rodriguez"
        role="Founder & CEO"
        country="Spain"
        avatarUrl="https://i.pravatar.cc/150?u=elena"
        flagUrl="https://flagcdn.com/es.svg"
        className="left-1/2 top-1/2 z-20 pointer-events-auto"
        style={{ transform: 'translate(-50%, -50%) scale(1.02)' }}
      />
    </div>
  );
}
