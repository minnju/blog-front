import { postList } from '@/api/postApi';
import { Post } from '@/interface/postInfo';
import { create } from 'zustand';

interface PostStore {
    posts: Post[];
    mainPost: Post[];
    setMainPost: (post: Post[]) => void;
    setPosts: (posts: Post[]) => void;
    addPost: (post: Post) => void;
    updatePost: (postId: number, updatedPost: Partial<Post>) => void;
    removePost: (postId: number) => void;
}

const usePostStore = create<PostStore>((set) => ({
    posts: [
        {
            title: 'The future of AI in software engineering',
            description:
                'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
            authorNm: 'Remy Sharp',
            content: 'test',
        },
        {
            title: 'Driving growth with user-centric product design',
            description:
                'Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Embracing minimalism in modern design',
            description:
                'Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Cultivating a culture of innovation',
            description:
                'Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Advancing cybersecurity with next-gen solutions',
            description:
                'Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Enhancing customer experience through innovation',
            description:
                'Our innovative approaches are enhancing customer experience. Learn about the new features and improvements that are delighting our users.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Pioneering sustainable engineering solutions',
            description:
                "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Maximizing efficiency with our latest product updates',
            description:
                'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: 'Designing for the future: trends and insights',
            description:
                'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            title: "Our company's journey: milestones and achievements",
            description:
                "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
            authorNm: 'Erica Johns',
            content: 'test',
        },
    ],
    mainPost: [
        {
            imageUrl: 'https://picsum.photos/800/450?random=1',

            title: 'Revolutionizing software development with cutting-edge tools',
            description:
                'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            imageUrl: 'https://picsum.photos/800/450?random=2',

            title: 'Innovative product features that drive success',
            description:
                'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            imageUrl: 'https://picsum.photos/800/450?random=3',

            title: 'Designing for the future: trends and insights',
            description:
                'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            imageUrl: 'https://picsum.photos/800/450?random=4',

            title: "Our company's journey: milestones and achievements",
            description:
                "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            imageUrl: 'https://picsum.photos/800/450?random=45',

            title: 'Pioneering sustainable engineering solutions',
            description:
                "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
            authorNm: 'Erica Johns',
            content: 'test',
        },
        {
            imageUrl: 'https://picsum.photos/800/450?random=6',
            title: 'Maximizing efficiency with our latest product updates',
            description:
                'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
            authorNm: 'Erica Johns',
            content: 'test',
        },
    ],
    setPosts: (postList: Post[]) => set({ posts: postList }),
    setMainPost: (post: Post[]) => set({ mainPost: post }),
    addPost: (post: Post) =>
        set((state) => ({
            posts: [...state.posts, post],
        })),
    updatePost: (postId: number, updatedPost: Partial<Post>) =>
        set((state) => ({
            posts: state.posts.map((post) => (post.postId === postId ? { ...post, ...updatedPost } : post)),
        })),
    removePost: (postId: number) =>
        set((state) => ({
            posts: state.posts.filter((post) => post.postId !== postId),
        })),
}));

export default usePostStore;
