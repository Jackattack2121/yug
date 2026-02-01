import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SplitSection from '@/components/ui/SplitSection';
import StatsBar from '@/components/ui/StatsBar';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'doboj' },
    { slug: 'jezero' },
    { slug: 'sockovac' },
    { slug: 'sinjakovo' },
    { slug: 'cajnice' },
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projectData = getProjectData(params.slug);
  
  if (!projectData) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${projectData.title} | Yugo Metals`,
    description: projectData.description || '',
  };
}

function getProjectData(slug: string) {
  const projects: Record<string, any> = {
    'doboj': {
      title: 'Doboj Project',
      subtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      description: 'High-grade mineral discovery history with significant exploration potential',
      heroImage: '/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg',
      commodityBadge: 'Nickel, Copper, Cobalt',
      number: '01',
      overview: {
        heading: 'Project Overview',
        content: 'The Doboj Project is located in Republic of Srpska, Bosnia and Herzegovina, and represents one of Yugo Metals\' key exploration assets. The project has a history of high-grade mineral discovery and is prospective for nickel, copper, and cobalt - critical metals essential for the energy transition.\n\nThe project is strategically positioned in an EU accession state, offering excellent access to European markets. Historical exploration and mining activity in the region demonstrates the mineral potential, while modern systematic exploration presents significant opportunities for new discoveries.',
      },
      stats: [
        { value: '100%', label: 'Ownership' },
        { value: 'Ni, Cu, Co', label: 'Target Metals' },
        { value: 'High Grade', label: 'Historical' },
      ],
      highlights: [
        '100% ownership with full operational control',
        'Historical high-grade discoveries',
        'Never subjected to modern systematic exploration',
        'Excellent infrastructure and skilled workforce',
      ],
      advantages: [
        {
          icon: '📍',
          title: 'EU Accession State',
          description: 'Strategic location in Bosnia and Herzegovina, on the doorstep of the European Union',
        },
        {
          icon: '💎',
          title: 'Critical Metals',
          description: 'Targeting nickel, copper, and cobalt - essential for the energy transition',
        },
        {
          icon: '📊',
          title: 'Modern Exploration',
          description: 'Applying systematic modern techniques to historically productive mining region',
        },
      ],
    },
    'jezero': {
      title: 'Jezero Project',
      subtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      description: 'Strategic exploration opportunity with historical mining activity',
      heroImage: '/yugo_images/flying-over-open-pit-gold-mine-quarry-in-rosia-m-2025-03-09-07-21-03-utc.jpg',
      commodityBadge: 'Precious Metals',
      number: '02',
      overview: {
        heading: 'Project Overview',
        content: 'The Jezero Project is located in the Republic of Srpska, Bosnia and Herzegovina, and is prospective for precious metals. The project benefits from historical mining activity in the region, demonstrating the presence of economically viable mineralisation.\n\nBosnia and Herzegovina\'s rich mining history, combined with its status as an EU accession state, provides an excellent environment for modern exploration and development. The Jezero Project represents a strategic opportunity to apply modern exploration techniques to a historically productive mining region.',
      },
      stats: [
        { value: '100%', label: 'Ownership' },
        { value: 'PM', label: 'Precious Metals' },
        { value: 'Historical', label: 'Activity' },
      ],
      highlights: [
        'Prospective for precious metals',
        'Historical mining activity',
        'Modern exploration opportunity',
        'EU accession state location',
      ],
      advantages: [
        {
          icon: '🥇',
          title: 'Precious Metals',
          description: 'Historical production demonstrates economic viability of mineralisation',
        },
        {
          icon: '🗺️',
          title: 'Proven Region',
          description: 'Located in the Balkans, one of the world\'s oldest mining areas',
        },
        {
          icon: '🔬',
          title: 'Modern Techniques',
          description: 'First-time application of systematic modern exploration',
        },
      ],
    },
    'sockovac': {
      title: 'Sočkovac Project',
      subtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      description: 'Prospective for base metals in the heart of the Balkans',
      heroImage: '/yugo_images/aerial-view-over-the-sand-pit-2025-10-13-02-21-23-utc.jpg',
      commodityBadge: 'Base Metals',
      number: '03',
      overview: {
        heading: 'Project Overview',
        content: 'The Sočkovac Project is located in the Republic of Srpska, Bosnia and Herzegovina, in the heart of the Balkans mining region. The project is prospective for base metals and benefits from being situated in one of the world\'s oldest mining areas.\n\nThe Balkans region has a long history of base metal production, with extensive existing infrastructure and a highly skilled workforce. The Sočkovac Project represents an opportunity to explore for base metals in a proven mining jurisdiction with strong geological potential.',
      },
      stats: [
        { value: '100%', label: 'Ownership' },
        { value: 'Base Metals', label: 'Target' },
        { value: 'Balkans', label: 'Heart of Region' },
      ],
      highlights: [
        'Base metals exploration',
        'Proven mining jurisdiction',
        'Excellent infrastructure',
        'Skilled local workforce',
      ],
      advantages: [
        {
          icon: '⚙️',
          title: 'Base Metals Focus',
          description: 'Targeting base metals essential for industrial applications',
        },
        {
          icon: '🏭',
          title: 'Historic Region',
          description: 'One of the world\'s oldest mining areas with proven mineral wealth',
        },
        {
          icon: '📍',
          title: 'Infrastructure',
          description: 'Benefits from existing mining infrastructure and skilled workforce',
        },
      ],
    },
    'sinjakovo': {
      title: 'Sinjakovo Project',
      subtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      description: 'Historical high-grade mineralisation with modern exploration planned',
      heroImage: '/yugo_images/yellow-excavator-digging-rocks-at-the-quarry-doin-2025-01-29-03-01-59-utc.jpg',
      commodityBadge: 'Copper, Cobalt',
      number: '04',
      overview: {
        heading: 'Project Overview',
        content: 'The Sinjakovo Project is located in the Republic of Srpska, Bosnia and Herzegovina, and is prospective for copper and cobalt - critical metals for the energy transition. The project has a history of high-grade mineralisation identified during historical exploration activities.\n\nYugo Metals\' systematic exploration approach will apply modern exploration techniques to this historically productive area. The project benefits from excellent infrastructure, skilled workforce, and a pro-mining regulatory environment in an EU accession state.',
      },
      stats: [
        { value: '100%', label: 'Ownership' },
        { value: 'Cu, Co', label: 'Target Metals' },
        { value: 'High Grade', label: 'Historical' },
      ],
      highlights: [
        'Copper and cobalt focus',
        'Historical high-grade discoveries',
        'Energy transition metals',
        'Systematic exploration program',
      ],
      advantages: [
        {
          icon: '⚡',
          title: 'Energy Transition',
          description: 'Copper and cobalt are essential for electrification and renewable energy',
        },
        {
          icon: '💎',
          title: 'High-Grade History',
          description: 'Historical exploration identified high-grade mineralisation',
        },
        {
          icon: '🔬',
          title: 'Modern Methods',
          description: 'Applying systematic modern techniques to underexplored targets',
        },
      ],
    },
    'cajnice': {
      title: 'Čajniče Project',
      subtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      description: 'Greenfield opportunity never subjected to modern exploration',
      heroImage: '/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg',
      commodityBadge: 'Nickel, Precious Metals',
      number: '05',
      overview: {
        heading: 'Project Overview',
        content: 'The Čajniče Project represents one of Yugo Metals\' most exciting opportunities. Located in the Republic of Srpska, Bosnia and Herzegovina, the project has never been subjected to modern systematic exploration despite being located in a historically productive mining region.\n\nThe project is prospective for nickel and precious metals and benefits from excellent infrastructure and access. As an EU accession state, Bosnia and Herzegovina offers a stable and supportive environment for exploration and development activities.',
      },
      stats: [
        { value: '100%', label: 'Ownership' },
        { value: 'Ni, PM', label: 'Target Metals' },
        { value: 'Greenfield', label: 'Opportunity' },
      ],
      highlights: [
        'Never subjected to modern exploration',
        'Significant discovery potential',
        'Nickel and precious metals focus',
        'First-time systematic exploration',
      ],
      advantages: [
        {
          icon: '🔍',
          title: 'Greenfield',
          description: 'First-time modern systematic exploration - significant discovery potential',
        },
        {
          icon: '⚡',
          title: 'Critical Metals',
          description: 'Targeting nickel and precious metals essential for energy transition',
        },
        {
          icon: '🏗️',
          title: 'Infrastructure',
          description: 'Excellent infrastructure in historically productive region',
        },
      ],
    },
  };

  return projects[slug] || null;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section - Full Width Image with Minimal Text */}
      <section className="relative h-[80vh] flex items-end bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="relative container pb-16 text-white">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-wider opacity-80 mb-4">
                Project {project.number}
              </div>
              <h1 className="text-display mb-4">
                {project.title}
            </h1>
              <p className="text-xl md:text-2xl font-josefin opacity-90 mb-2">
                {project.commodityBadge}
              </p>
              <p className="text-base opacity-80">
                {project.subtitle}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar background="blue" stats={project.stats} />

      {/* Overview Split Section */}
      <SplitSection
        fullHeight={false}
        leftContent={
          <div className="max-w-xl">
            <AnimatedSection>
              <h2 className="text-heading-lg text-secondary-900 mb-8">
                {project.overview.heading}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-josefin">
                {project.overview.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        }
        rightContent={
          <div className="p-12 bg-primary-50 flex items-center">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-secondary-900">
                Exploration Highlights
              </h3>
              <ul className="space-y-4">
                {project.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />

      {/* Project Advantages - Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-heading-lg text-secondary-900 mb-4">
                Project Advantages
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {project.advantages.map((advantage: any, index: number) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-6xl mb-6">{advantage.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-secondary-900">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exploration Program Split */}
      <SplitSection
        fullHeight={false}
        reverse={true}
        leftContent={
          <div className="max-w-xl">
            <AnimatedSection>
              <h2 className="text-heading-lg text-secondary-900 mb-8">
                Exploration Program
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-josefin">
                Yugo Metals has developed a two-year technical work program, including 
                systematic ground work, geophysical surveys, and drilling. The project 
                was explored sporadically during the Yugoslav regime but has never been 
                subjected to modern systematic exploration, presenting significant 
                discovery potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-josefin">
                The exploration program focuses on identifying and delineating high-grade 
                mineralisation using modern exploration techniques and technologies. The 
                region boasts excellent infrastructure and a highly skilled workforce, 
                supporting efficient exploration activities.
              </p>
            </AnimatedSection>
          </div>
        }
        rightContent={
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/yugo_images/green-dense-forests-surround-old-mining-factory-wi-2025-08-28-11-53-12-utc.jpg)' }}
          />
        }
      />

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-heading-xl mb-8">
              Explore More<br />
              Projects
            </h2>
            <p className="text-xl mb-12 opacity-90 font-josefin">
              Discover our five projects in Bosnia and Herzegovina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/investors/asx-announcements" variant="secondary">
                Latest Announcements
              </Button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-600">
                <span>All Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
