import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectSection from '@/components/mining/ProjectSection';
import { ContentSection } from '@/lib/admin/section-types';
import Button from '@/components/ui/Button';

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
    title: `${projectData.heroTitle} | Yugo Metals`,
    description: projectData.heroDescription || '',
  };
}

function getProjectData(slug: string) {
  const projects: Record<string, any> = {
    'doboj': {
      heroTitle: 'Doboj Project',
      heroSubtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      heroDescription: 'High-grade mineral discovery history with significant exploration potential',
      heroImage: '/images/project-doboj.jpg',
      commodityBadge: 'Nickel, Copper, Cobalt',
      sections: [
        {
          id: 'overview',
          type: 'text_image',
          order: 1,
          heading: 'Project Overview',
          content: '<p>The Doboj Project is located in Republic of Srpska, Bosnia and Herzegovina, and represents one of Yugo Metals\' key exploration assets. The project has a history of high-grade mineral discovery and is prospective for nickel, copper, and cobalt - critical metals essential for the energy transition.</p><p>The project is strategically positioned in an EU accession state, offering excellent access to European markets. Historical exploration and mining activity in the region demonstrates the mineral potential, while modern systematic exploration presents significant opportunities for new discoveries.</p>',
          imagePosition: 'right',
          image: '/images/project-doboj.jpg',
          backgroundColor: 'white',
        },
        {
          id: 'statistics',
          type: 'data_cards',
          order: 2,
          heading: 'Key Project Statistics',
          cards: [
            {
              title: 'Ownership',
              mainResult: '100%',
              badge: 'Full Control',
              badgeColor: 'primary',
            },
            {
              title: 'Target Metals',
              mainResult: 'Ni, Cu, Co',
              badge: 'Critical Metals',
              badgeColor: 'primary',
            },
            {
              title: 'Historical Activity',
              mainResult: 'High Grade',
              badge: 'Proven',
              badgeColor: 'primary',
            },
          ],
          backgroundColor: 'primary',
        },
        {
          id: 'exploration',
          type: 'text_image',
          order: 3,
          heading: 'Exploration Program',
          content: '<p>Yugo Metals has developed a two-year technical work program for the Doboj Project, including systematic ground work, geophysical surveys, and drilling. The project was explored sporadically during the Yugoslav regime but has never been subjected to modern systematic exploration, presenting significant discovery potential.</p><p>The exploration program focuses on identifying and delineating high-grade nickel, copper, and cobalt mineralisation using modern exploration techniques and technologies. The region boasts excellent infrastructure and a highly skilled workforce, supporting efficient exploration activities.</p>',
          imagePosition: 'left',
          highlightBox: {
            title: 'Exploration Highlights',
            items: [
              '100% ownership with full operational control',
              'Historical high-grade discoveries',
              'Never subjected to modern systematic exploration',
              'Excellent infrastructure and skilled workforce',
            ],
            bgColor: 'bg-primary-50',
          },
          backgroundColor: 'gray',
        },
        {
          id: 'advantages',
          type: 'advantages_grid',
          order: 4,
          heading: 'Project Advantages',
          columns: 3,
          items: [
            {
              icon: '📍',
              title: 'EU Accession State',
              description: 'Strategic location in Bosnia and Herzegovina, on the doorstep of the European Union',
              iconBgColor: 'primary',
            },
            {
              icon: '💎',
              title: 'Critical Metals',
              description: 'Targeting nickel, copper, and cobalt - essential for the energy transition',
              iconBgColor: 'primary',
            },
            {
              icon: '📊',
              title: 'Modern Exploration',
              description: 'Applying modern systematic exploration to historically productive mining region',
              iconBgColor: 'primary',
            },
          ],
          backgroundColor: 'white',
        },
      ],
    },
    'jezero': {
      heroTitle: 'Jezero Project',
      heroSubtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      heroDescription: 'Strategic exploration opportunity with historical mining activity and modern potential',
      heroImage: '/images/project-jezero.jpg',
      commodityBadge: 'Precious Metals',
      sections: [
        {
          id: 'overview',
          type: 'text_image',
          order: 1,
          heading: 'Project Overview',
          content: '<p>The Jezero Project is located in the Republic of Srpska, Bosnia and Herzegovina, and is prospective for precious metals. The project benefits from historical mining activity in the region, demonstrating the presence of economically viable mineralisation.</p><p>Bosnia and Herzegovina\'s rich mining history, combined with its status as an EU accession state, provides an excellent environment for modern exploration and development. The Jezero Project represents a strategic opportunity to apply modern exploration techniques to a historically productive mining region.</p>',
          imagePosition: 'right',
          image: '/images/project-jezero.jpg',
          backgroundColor: 'white',
        },
        {
          id: 'statistics',
          type: 'data_cards',
          order: 2,
          heading: 'Project Statistics',
          cards: [
            {
              title: 'Target Corridor',
              mainResult: 'Extensive',
              badge: 'Multiple Targets',
              badgeColor: 'primary',
            },
            {
              title: 'Exploration Status',
              mainResult: 'Active',
              badge: 'Ongoing',
              badgeColor: 'yellow',
            },
            {
              title: 'Jurisdiction',
              mainResult: 'Tasmania',
              badge: 'Established',
              badgeColor: 'primary',
            },
          ],
          backgroundColor: 'primary',
        },
        {
          id: 'exploration',
          type: 'full_text',
          order: 3,
          heading: 'Exploration Activities',
          content: '<p>The exploration program at Jezero includes systematic geological mapping, geochemical sampling, and geophysical surveys. The project benefits from excellent infrastructure and a highly skilled local workforce.</p><p>Historical mining activity provides valuable data for targeting modern exploration efforts. Yugo Metals\' systematic approach combines historical knowledge with modern exploration technologies to identify and define high-potential precious metal targets.</p>',
          centered: true,
          maxWidth: 'medium',
          backgroundColor: 'gray',
        },
      ],
    },
    'sockovac': {
      heroTitle: 'Sočkovac Project',
      heroSubtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      heroDescription: 'Prospective for base metals in the heart of the Balkans mining region',
      heroImage: '/images/project-sockovac.jpg',
      commodityBadge: 'Base Metals',
      sections: [
        {
          id: 'overview',
          type: 'text_image',
          order: 1,
          heading: 'Project Overview',
          content: '<p>The Sočkovac Project is located in the Republic of Srpska, Bosnia and Herzegovina, in the heart of the Balkans mining region. The project is prospective for base metals and benefits from being situated in one of the world\'s oldest mining areas.</p><p>The Balkans region has a long history of base metal production, with extensive existing infrastructure and a highly skilled workforce. The Sočkovac Project represents an opportunity to explore for base metals in a proven mining jurisdiction with strong geological potential.</p>',
          imagePosition: 'right',
          image: '/images/project-sockovac.jpg',
          backgroundColor: 'white',
        },
        {
          id: 'advantages',
          type: 'advantages_grid',
          order: 2,
          heading: 'Project Advantages',
          columns: 2,
          items: [
            {
              icon: '⚙️',
              title: 'Base Metals Focus',
              description: 'Targeting base metals essential for industrial applications and infrastructure development',
              iconBgColor: 'primary',
            },
            {
              icon: '🏭',
              title: 'Historic Mining Region',
              description: 'Located in the Balkans, one of the world\'s oldest mining areas with proven mineral wealth',
              iconBgColor: 'primary',
            },
            {
              icon: '🗺️',
              title: 'Excellent Infrastructure',
              description: 'Benefits from existing mining infrastructure and highly skilled local workforce',
              iconBgColor: 'primary',
            },
            {
              icon: '📍',
              title: 'EU Access',
              description: 'Strategic location in EU accession state provides access to European markets',
              iconBgColor: 'primary',
            },
          ],
          backgroundColor: 'gray',
        },
      ],
    },
    'sinjakovo': {
      heroTitle: 'Sinjakovo Project',
      heroSubtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      heroDescription: 'Historical high-grade mineralisation with modern systematic exploration planned',
      heroImage: '/images/project-sinjakovo.jpg',
      commodityBadge: 'Copper, Cobalt',
      sections: [
        {
          id: 'overview',
          type: 'text_image',
          order: 1,
          heading: 'Project Overview',
          content: '<p>The Sinjakovo Project is located in the Republic of Srpska, Bosnia and Herzegovina, and is prospective for copper and cobalt - critical metals for the energy transition. The project has a history of high-grade mineralisation identified during historical exploration activities.</p><p>Yugo Metals\' systematic exploration approach will apply modern exploration techniques to this historically productive area. The project benefits from excellent infrastructure, skilled workforce, and a pro-mining regulatory environment in an EU accession state.</p>',
          imagePosition: 'right',
          image: '/images/project-sinjakovo.jpg',
          backgroundColor: 'white',
        },
        {
          id: 'advantages',
          type: 'advantages_grid',
          order: 2,
          heading: 'Project Highlights',
          columns: 3,
          items: [
            {
              icon: '⚡',
              title: 'Energy Transition Metals',
              description: 'Copper and cobalt are essential for electrification and renewable energy',
              iconBgColor: 'primary',
            },
            {
              icon: '💎',
              title: 'High-Grade History',
              description: 'Historical exploration identified high-grade copper and cobalt mineralisation',
              iconBgColor: 'primary',
            },
            {
              icon: '🔬',
              title: 'Modern Exploration',
              description: 'Applying systematic modern techniques to underexplored historical targets',
              iconBgColor: 'primary',
            },
          ],
          backgroundColor: 'gray',
        },
      ],
    },
    'cajnice': {
      heroTitle: 'Čajniče Project',
      heroSubtitle: 'Republic of Srpska, Bosnia and Herzegovina',
      heroDescription: 'Never subjected to modern exploration techniques, offering significant discovery potential',
      heroImage: '/images/project-cajnice.jpg',
      commodityBadge: 'Nickel, Precious Metals',
      sections: [
        {
          id: 'overview',
          type: 'text_image',
          order: 1,
          heading: 'Project Overview',
          content: '<p>The Čajniče Project represents one of Yugo Metals\' most exciting opportunities. Located in the Republic of Srpska, Bosnia and Herzegovina, the project has never been subjected to modern systematic exploration despite being located in a historically productive mining region.</p><p>The project is prospective for nickel and precious metals and benefits from excellent infrastructure and access. As an EU accession state, Bosnia and Herzegovina offers a stable and supportive environment for exploration and development activities.</p>',
          imagePosition: 'right',
          image: '/images/project-cajnice.jpg',
          backgroundColor: 'white',
        },
        {
          id: 'statistics',
          type: 'data_cards',
          order: 2,
          heading: 'Project Highlights',
          cards: [
            {
              title: 'Exploration Status',
              mainResult: 'Greenfield',
              badge: 'High Potential',
              badgeColor: 'primary',
            },
            {
              title: 'Target Metals',
              mainResult: 'Ni & PM',
              badge: 'Critical',
              badgeColor: 'primary',
            },
            {
              title: 'Modern Work',
              mainResult: 'First Time',
              badge: 'Opportunity',
              badgeColor: 'primary',
            },
          ],
          backgroundColor: 'primary',
        },
        {
          id: 'exploration',
          type: 'full_text',
          order: 3,
          heading: 'Exploration Opportunity',
          content: '<p>The Čajniče Project offers a unique opportunity to apply modern systematic exploration techniques to an area that has never been explored using contemporary methods. This greenfield opportunity combines geological prospectivity with modern exploration technology.</p><p>Yugo Metals\' exploration program will include systematic geological mapping, geochemical sampling, geophysical surveys, and targeted drilling. The project represents significant discovery potential in a region with proven mineral wealth and excellent infrastructure.</p>',
          centered: true,
          maxWidth: 'medium',
          backgroundColor: 'gray',
        },
        {
          id: 'advantages',
          type: 'advantages_grid',
          order: 4,
          heading: 'Project Advantages',
          columns: 3,
          items: [
            {
              icon: '🔍',
              title: 'Greenfield Opportunity',
              description: 'Never subjected to modern systematic exploration - significant discovery potential',
              iconBgColor: 'primary',
            },
            {
              icon: '⚡',
              title: 'Critical Metals',
              description: 'Targeting nickel and precious metals essential for energy transition',
              iconBgColor: 'primary',
            },
            {
              icon: '🏗️',
              title: 'Infrastructure',
              description: 'Excellent infrastructure and skilled workforce in historically productive region',
              iconBgColor: 'primary',
            },
          ],
          backgroundColor: 'white',
        },
      ],
    },
  };

  return projects[slug] || null;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectData = getProjectData(params.slug);

  if (!projectData) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${projectData.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
        <div className="relative container text-white">
          <AnimatedSection>
            {projectData.commodityBadge && (
              <span className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-semibold uppercase tracking-wider mb-4">
                {projectData.commodityBadge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
              {projectData.heroTitle}
            </h1>
            {projectData.heroSubtitle && (
              <p className="text-xl md:text-2xl font-josefin italic mb-2">
                {projectData.heroSubtitle}
              </p>
            )}
            {projectData.heroDescription && (
              <p className="text-lg max-w-3xl">{projectData.heroDescription}</p>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      {projectData.sections &&
        projectData.sections
          .sort((a: ContentSection, b: ContentSection) => a.order - b.order)
          .map((section: ContentSection, index: number) => (
            <ProjectSection key={section.id} section={section} index={index} />
          ))}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-800 to-primary-600 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
              Explore More Projects
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discover our five projects in Bosnia and Herzegovina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/investors/asx-announcements" variant="secondary">
                Latest Announcements
              </Button>
              <Button href="/projects" variant="primary">
                All Projects
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

