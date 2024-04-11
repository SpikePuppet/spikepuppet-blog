import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';

const posts = await getCollection('posts');
const sortedPosts = posts
    .map(post => {
        return {...post.data, slug: post.slug};
    })    
    .sort((a: any, b: any) => {
        return new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf();
    })
    .filter((post: any) => {
        return post.title !== "About Me" && !post.draft;
    });

// TODO: Get the actual type in here
export async function GET(context: any) {
    return rss({
        title: "Rhys' Ramblings",
        description: "My personal blog about all things tech and startups (with occasional diversions I find fun!)",
        site: context.site,
        items: sortedPosts.map(post => ({
            title: post.title,
            description: post.description,
            pubDate: post.publishDate,
            link: `/posts/${post.slug}`
        })),
        customData: `<language>en-us</language>`
    })
}