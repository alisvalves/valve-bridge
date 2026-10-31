import React from 'react';

interface SectionProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  muted?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  eyebrow,
  title,
  intro,
  muted = false,
  className = '',
  children,
}) => {
  return (
    <section className={`py-16 md:py-24 ${muted ? 'bg-surface border-y border-border' : 'bg-white'} ${className}`}>
      <div className="container-px mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
            {title && (
              <h2 className="font-display text-2xl md:text-4xl font-bold text-navy tracking-tight">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
