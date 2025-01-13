import { FC } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/Carousel';
import { WorkflowCard } from '../ui/WorkflowCard';

const workflows = [
  {
    title: 'Customer Requests',
    description: 'Build what customers actually want',
    href: '/customer-requests',
    imageSrc: '/images/workflows/customer-requests.png',
  },
  {
    title: 'Powerful Git Workflows',
    description: 'Automate pull requests and commit workflows',
    href: '/git-workflows',
    imageSrc: '/images/workflows/git-workflows.png',
  },
  {
    title: 'Mobile Experience',
    description: 'Move product work forward from anywhere',
    href: '/mobile',
    imageSrc: '/images/workflows/mobile.png',
  },
  {
    title: 'Integrations',
    description: '100+ ways to enhance your experience',
    href: '/integrations',
    imageSrc: '/images/workflows/integrations.png',
  },
  {
    title: 'Developer Tools',
    description: 'Build your own add-ons with our API',
    href: '/developers',
    imageSrc: '/images/workflows/developers.png',
  },
];

export const WorkflowsSection: FC = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {workflows.map((workflow) => (
              <CarouselItem key={workflow.href} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <WorkflowCard {...workflow} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
