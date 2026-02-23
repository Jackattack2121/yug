'use client'

import AboutHero from '@/components/about/AboutHero'
import CompanyStory from '@/components/about/CompanyStory'
import KeyMetrics from '@/components/about/KeyMetrics'
import TeamGrid from '@/components/about/TeamGrid'
import ProjectsOverview from '@/components/about/ProjectsOverview'
import ResponsibleExploration from '@/components/about/ResponsibleExploration'
import CompanyTimeline from '@/components/about/CompanyTimeline'
import AboutCTA from '@/components/about/AboutCTA'
import InvestorDisclaimer from '@/components/investor/InvestorDisclaimer'

export default function WhyYugoMetals() {
  return (
    <>
      {/* 1. Hero — Who We Are */}
      <AboutHero />

      {/* 2. The Story — Origin & Mission */}
      <CompanyStory />

      {/* 3. Key Numbers — Impact Metrics */}
      <KeyMetrics />

      {/* 4. Board & Management — The Team */}
      <TeamGrid />

      {/* 5. Our Projects — Quick Visual Overview */}
      <ProjectsOverview />

      {/* 6. Responsible Exploration — ESG / Values */}
      <ResponsibleExploration />

      {/* 7. Timeline — Company Milestones */}
      <CompanyTimeline />

      {/* 8. CTA — What's Next */}
      <AboutCTA />

      {/* 9. Compliance Disclaimer */}
      <InvestorDisclaimer forwardLooking notAdvice sharePrice={false} competentPerson={false} />
    </>
  )
}
