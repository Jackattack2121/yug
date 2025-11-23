import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProjectCard from '@/components/mining/ProjectCard'

export const metadata = {
  title: 'Our Projects | Yugo Metals',
  description: 'Five high-potential projects in Bosnia and Herzegovina - nickel, copper, cobalt, and precious metals',
}

const projects = [
  {
    title: 'Doboj Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Copper, Cobalt',
    description: 'High-grade mineral discovery history with significant exploration potential in this proven mining region.',
    image: '/images/project-doboj.jpg',
    href: '/projects/doboj',
  },
  {
    title: 'Jezero Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Precious Metals',
    description: 'Strategic exploration opportunity with historical mining activity and modern exploration potential.',
    image: '/images/project-jezero.jpg',
    href: '/projects/jezero',
  },
  {
    title: 'Sočkovac Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Base Metals',
    description: 'Prospective for base metals in the heart of the Balkans mining region.',
    image: '/images/project-sockovac.jpg',
    href: '/projects/sockovac',
  },
  {
    title: 'Sinjakovo Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Copper, Cobalt',
    description: 'Historical high-grade mineralisation with modern systematic exploration planned.',
    image: '/images/project-sinjakovo.jpg',
    href: '/projects/sinjakovo',
  },
  {
    title: 'Čajniče Project',
    location: 'Republic of Srpska, Bosnia and Herzegovina',
    type: 'Nickel, Precious Metals',
    description: 'Never subjected to modern exploration techniques, offering significant discovery potential.',
    image: '/images/project-cajnice.jpg',
    href: '/projects/cajnice',
  },
]

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/hero-mining-1.jpg)' }}
        />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl font-josefin italic">
            Five high-potential projects in Bosnia and Herzegovina
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-600 leading-relaxed">
                Yugo Metals owns 100% of five projects located in Republic of Srpska, 
                Bosnia and Herzegovina. The projects have a history of high-grade mineral 
                discovery and extraction and are prospective for nickel, copper, cobalt, 
                and precious metals. Strategic location in an EU accession state with 
                rich mining history and modern exploration opportunities.
              </p>
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section-padding bg-primary-50">
        <div className="container">
          <AnimatedSection>
            <SectionTitle title="Project Portfolio Highlights" centered />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">5</div>
                <p className="text-gray-700">Projects (100% Owned)</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">EU</div>
                <p className="text-gray-700">Accession State Location</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">3+</div>
                <p className="text-gray-700">Years in Operation</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

