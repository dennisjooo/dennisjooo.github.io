import { Project } from './types';

export const moodList: Project = {
    title: 'MoodList',
    description: 'Turn your mood into playlists, vibes, soundtracks, and more',
    imageUrl: '/images/project/moodlist/homepage.webp',
    date: '2025-11-11',
    blogPost: `I'd like to start this by an admission, I suck at programming.
    I feel like there are a lot of things still for me to learn and I decided in late September to start this project just for fun.
    It's a roller coaster ride of bug fixing, optimisation, and learning new things. So here we are, I made an app called **Moodlist**.
    The premise is simple, you input your mood and it'll spit out a playlist in a minute or two.

## The Inspiration

Remember that Spotify feature that could create a playlist from another playlist? I used to rely on it heavily for music discovery, finding interesting songs to add to my own collections.

The idea for MoodList is simple: **just describe what you want, and get a solid playlist out of it.** No manual searching, no endless scrolling. Just a query and boom, curated music that's listenable by you on Spotify.

## Features and Showcase

### Homepage
So the first thing you'll see when you visit the app is the homepage, which is a simple and clean design, the one on the thumbnail of this page above. 
Basically if you are logged in, there's a create button, else it'll prompt you to login using your spotify account.

### Walkthrough
A slight scroll down and it's the walkthrough of the app. I'm pretty proud of this one not gonna lie.

![Moodlist Walkthrough](/images/project/moodlist/walkthrough.webp)

These are some of the results from my previous queries and I think it's a neat way to tell what this app is capable of (in theory).
For this site, I really enjoyed the idea of using colour gradients to represent a mood. I'm generating a triadic colour combination for every query.
Right below that, there are sample moods one can just click on to get started to the create page.

![Moodlist Sample Moods](/images/project/moodlist/sample-moods.webp)

### Create
The key component for this app is the **/create** page, here you can input your mood or basically query and it'll spit out a playlist in a minute or two.
The design for this is basically just a card, some mood samples on the button and a quota.
Need to make sure users are not abusing the app.

![Moodlist Create](/images/project/moodlist/create.webp)

Then we move on to the actual workflow of the app.

![Moodlist Create Workflow](/images/project/moodlist/create-workflow.webp)

Remember the triadic colour I mentioned? So the background starts of with the theme colour of your choosing, before going to the triadic colour.
This is like the longest part of the workflow, so I wanted to make it look nice and clean.
This workflow also uses either SSE or WebSocket to update the UI in real time, along with a small notification progress on top.

When it's done, you'll be redirected to the playlist page below. Excuse my example, it's not off of the same query.

![Moodlist Playlist](/images/project/moodlist/playlist-result.webp)

It still has that colour scheme and more insinuated here. Your playlist is now ready, you can either edit it or click a button to save it to Spotify.
Heck you can even sync changes directly from Spotify, if you add a track or two there, it'll be reflected here.

![Moodlist Playlist Edit](/images/project/moodlist/playlist-edit.webp)

Alternatively you can even search for tracks here as well and add them directly to your playlist.

Finally, every single one of your playlist is saved and available to view in **/playlists** page.

![Moodlist Playlists](/images/project/moodlist/playlists.webp)

### Dashboard

So I wanted a clean **/profile** page where you can actually see what you've been making. Voila below is the result.
A quick dashboard to see your activities on the app

![Moodlist Dashboard](/images/project/moodlist/dashboard.webp)

Recent activities, quick action buttons, mood palettes, and also audio analysis based on what you've been making on the app.
I think this is a cool addition, and having a Business Intelligence intern for a while really helped me in designing this.

## The Journey: Building a Full-Stack Music App

Building MoodList from scratch was a crash course in modern web development. I used **Next.js 16** with **TypeScript** on the frontend for type safety and modern SSR, **FastAPI** with **PostgreSQL** and **Redis** on the backend for performance and caching, and **LangGraph** to orchestrate AI agents that power the recommendation engine. The app integrates with both **Spotify** and **ReccoBeat** APIs to fetch music data and generate playlists.

For the full technical stack details, check out the [about page](https://moodlist-music.vercel.app/about).

## The Reality Check

Building a full-stack app from scratch is *hard*. What works locally doesn't always translate to production, managing distributed sessions, OAuth flows, and infrastructure challenges taught me more than any tutorial. An AWS outage forced a pivot to Vercel/Railway/Neon/Upstash, while CORS issues and Spotify's dev-mode API limitations added complexity.

AI agents sounded promising but proved challenging, musical taste is hard to teach, response times lag, and recommendations miss the mark. As a non-designer, UX was new territory. This project exposed production realities: debugging, tradeoffs, and incremental building with AI tools like Cursor. End-to-end development is messy, but getting the ball rolling makes it manageable.

## Final Thoughts

It's not the best. It's not the cleanest. But it's *something*, something I built from scratch, something that works, and something I can put in my portfolio.

Most importantly: it was fun. I learned a ton, broke things, fixed them (mostly), and came out the other side with a working product.

*If you find some cool music along the way, that's just a bonus.*

Thank you for reading! 
This project is dedicated to my dad, hope you're proud.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/moodlist' },
        { text: 'Live Demo', url: 'https://moodlist-music.vercel.app' }
    ]
};

