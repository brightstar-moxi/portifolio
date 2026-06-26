"use client";

import AnimationWrapper from "../animation-wrapper";

export default function SectionHeader({
  badge,
  title,
  description,
}) {
  return (
    <AnimationWrapper className="text-center mb-16">

      <span className="inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-2 text-sm text-orange-400">

        {badge}

      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6">

        {title}

      </h2>

      <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">

        {description}

      </p>

    </AnimationWrapper>
  );
}