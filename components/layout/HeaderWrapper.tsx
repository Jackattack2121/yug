import Header from './Header';

const projects = [
  { name: 'Mick Well REE Project', slug: 'mick-well' },
  { name: 'Arthur River: LK1 REE Project', slug: 'arthur-river' },
  { name: 'Chalby Chalby Lithium Project', slug: 'chalby-chalby' },
  { name: 'NSW Projects', slug: 'nsw-projects' },
];

export default function HeaderWrapper() {
  return <Header projects={projects} />;
}

