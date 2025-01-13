export interface Post {
  slug: string
  title: string
  description: string
  date: string
  image?: string
  category: string
  content?: string
  author: {
    name: string
    image: string
  }
}

export async function getAllPosts(): Promise<Post[]> {
  // For now, return mock posts until we set up contentlayer
  return [
    {
      slug: 'introducing-norn',
      title: 'Introducing Norn: Advancing AI for Humanity',
      description: "Today, we're excited to announce Norn, a new research organization dedicated to advancing artificial intelligence in a way that benefits all of humanity.",
      date: '2024-01-10',
      image: '/images/blog/introducing-norn.jpg',
      category: 'Company News',
      content: `
# Introducing Norn

Today, we're excited to announce Norn, a new research organization dedicated to advancing artificial intelligence in a way that benefits all of humanity.

## Our Mission

At Norn, we believe that artificial intelligence has the potential to solve some of humanity's most pressing challenges. Our mission is to ensure that this powerful technology is developed safely and ethically, with the interests of all humanity at heart.

## Our Approach

We're taking a unique approach to AI development that combines:

- Rigorous scientific research
- Ethical considerations at every step
- Practical applications that benefit society
- Open collaboration with the global research community

## Join Us

We're looking for talented researchers, engineers, and thinkers to join us on this journey. If you're passionate about developing AI that benefits humanity, we want to hear from you.

[Learn More About Careers](/careers) | [View Our Research](/research)
      `,
      author: {
        name: 'The Norn Team',
        image: '/images/team/default-avatar.jpg'
      }
    },
    {
      slug: 'enhancing-narrow-ai',
      title: 'Breakthroughs in Narrow AI Enhancement',
      description: 'Our latest research shows promising results in improving the efficiency and reliability of specialized AI systems.',
      date: '2024-01-08',
      image: '/images/blog/narrow-ai.jpg',
      category: 'Research',
      content: `
# Breakthroughs in Narrow AI Enhancement

Our latest research has led to significant improvements in the efficiency and reliability of specialized AI systems.

## Key Findings

- 40% improvement in task-specific performance
- 30% reduction in computational requirements
- Enhanced reliability in edge cases
- Better handling of ambiguous inputs

## Implications

These improvements have significant implications for:

- Industrial automation
- Medical diagnosis
- Financial analysis
- Scientific research

## Next Steps

We're continuing to refine these techniques and explore new applications.

[Read the Full Paper](/papers/narrow-ai-2024) | [View Related Research](/research/narrow-ai)
      `,
      author: {
        name: 'Dr. Sarah Chen',
        image: '/images/team/default-avatar.jpg'
      }
    },
    {
      slug: 'financial-ai-developments',
      title: 'New Developments in Financial AI',
      description: 'Exploring how our latest AI models are revolutionizing financial prediction and risk assessment.',
      date: '2024-01-05',
      image: '/images/blog/financial-ai.jpg',
      category: 'Research',
      content: `
# New Developments in Financial AI

Our financial AI research team has made significant progress in developing more accurate and reliable financial prediction models.

## Recent Advances

- Enhanced market prediction accuracy
- Improved risk assessment capabilities
- Better handling of market volatility
- More robust portfolio optimization

## Applications

These advances are being applied to:

- Market analysis
- Risk management
- Portfolio optimization
- Trading strategies

## Future Directions

We're exploring new ways to improve our models and expand their applications.

[View Technical Details](/docs/financial-ai) | [Explore Use Cases](/cases/financial)
      `,
      author: {
        name: 'Dr. Michael Ross',
        image: '/images/team/default-avatar.jpg'
      }
    },
    {
      slug: 'medical-ai-breakthroughs',
      title: 'Breakthroughs in Medical AI Research',
      description: 'Recent advances in our medical AI research program are showing promising results for disease diagnosis and treatment planning.',
      date: '2024-01-03',
      image: '/images/blog/medical-ai.jpg',
      category: 'Research',
      content: `
# Breakthroughs in Medical AI Research

Our medical AI team has achieved significant breakthroughs in disease diagnosis and treatment planning.

## Key Advances

- Improved diagnostic accuracy
- Better treatment optimization
- Enhanced patient monitoring
- More accurate prognosis prediction

## Impact

These advances are helping:

- Doctors make better decisions
- Patients receive better care
- Hospitals operate more efficiently
- Researchers understand diseases better

## Looking Forward

We're continuing to expand our research and develop new applications.

[Read the Research Paper](/papers/medical-ai-2024) | [Explore Applications](/applications/medical)
      `,
      author: {
        name: 'Dr. Emily Wong',
        image: '/images/team/default-avatar.jpg'
      }
    },
    {
      slug: 'ai-ethics-framework',
      title: 'Introducing Our AI Ethics Framework',
      description: 'A comprehensive look at how we ensure our AI development aligns with human values and benefits society.',
      date: '2024-01-01',
      image: '/images/blog/ethics.jpg',
      category: 'Ethics',
      content: `
# Our AI Ethics Framework

We're committed to developing AI that aligns with human values and benefits society.

## Core Principles

- Beneficence
- Non-maleficence
- Autonomy
- Justice
- Transparency

## Implementation

How we put these principles into practice:

- Rigorous testing
- Regular audits
- External oversight
- Open dialogue

## Join the Discussion

We welcome input from the community on our ethical framework.

[Read the Full Framework](/docs/ethics) | [Provide Feedback](/contact)
      `,
      author: {
        name: 'Dr. James Miller',
        image: '/images/team/default-avatar.jpg'
      }
    }
  ]
} 