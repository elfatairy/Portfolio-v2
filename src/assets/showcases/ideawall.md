## The Inspiration

I was searching for a new side project idea, but I didn't want to build another ecommerce site, blog, or landing page. I wanted something different, something that would improve my creativity and technical skills.

After some brainstorming, I landed on a concept that excited me: **a collaborative note-taking app where users could create sticky notes, see others' notes in real-time, and interact with each other in a shared space**.

![Idea Wall Demo](/public/images/ideawall/main.png)

## Challenges and Solutions

### Challenge 1: Grid Background

The first technical challenge was creating the grid background that would serve as the canvas for sticky notes. I needed something similar to design tools like Figma, but existing packages didn't suit my specific use case. This led me to build my own solution, which eventually evolved into a complete npm package ([Dynamic Gridline](/dynamic-gridline)). 

### Challenge 2: Real-Time Collaboration Architecture

I wanted users to see each other's sticky notes appear, update, and disappear in real-time. I chose Supabase for its low-friction approach as it didn't require custom backend development or complex deployment processes. This allowed me to focus on the frontend experience while still delivering real-time features.

![Realtime Demo](/public//images/ideawall/realtime-demo.mp4)

### Challenge 3: Inclusive User Experience

I wanted the barrier to entry to be as low as possible. Users should be able to jump in and start collaborating within seconds, without lengthy registration processes. So I implemented an authentication flow with a fake name/avatar generator.

```tsx
// Simplified example of anonymous user generation
const randomize = () => {
  setAvatar(genConfig())
  setName(randomizeNameHelper())
}
```

### Challenge 4: Content Moderation Across Languages

Once I added the anonymous feature, I realized users could potentially post inappropriate content. I needed content moderation, but existing solutions didn't support Arabic. After searching, I found the `@2toad/profanity` package, which handled English profanity detection well, and allowes extension for other languages. So I extended the library to include Arabic words and patterns to make the app a safer place for everyone.

![Profanity Demo](/public//images/ideawall/profanity-demo.mp4)

### Challenge 5: Real-Time Cursor Tracking

While using Google Docs one day, I was inspired by how they show currently online users and their cursor positions in real-time. I realized that an interactive app like IdeaWall would really benefit from this feature.

I implemented real-time cursor broadcasting using Supabase's real-time features. However, I quickly discovered that broadcasting every mouse movement would create performance issues and abuse bandwidth. So I built a custom throttling function to limit the frequency of cursor position updates, finding the right balance between real-time feel and system performance.

```tsx
// Simplified throttling approach
const throttledUpdateUserPosition = useMemo(() => {
  return throttle((position: { x: number; y: number }) => {
    if (!profile?.id) {
      return
    }
    updateUserPosition(position)
  }, THROTTLE_TIME)
}, [updateUserPosition, profile?.id])
```

### Challenge 6: End-to-End Testing Authentication

I wanted to ensure the app wouldn't break as I continued developing features. Given that the app has defined user inputs and expected outputs, end-to-end testing seemed like the perfect approach. The biggest challenge was maintaining consistent authentication across tests. After research and experimentation, I discovered that by saving Supabase's localStorage objects and setting them into test sessions' localStorage, I could authenticate as specific test accounts. So I created two dedicated test accounts and built a utility functions to switch between them during tests.

### Challenge 7: Platform Reliability Issues

My tests worked perfectly on Chromium and WebKit but consistently failed on Firefox in CI/CD. After extensive debugging (and I mean *extensive* 😂), I discovered the issue was with wheel zoom behavior as it varied significantly across platforms.

I replaced wheel zoom interactions with my custom zoom slider component, ensuring consistent behavior across all browsers.

![Test Success Results](/public/images/ideawall/tests-success.png)

**Related Project**: [Dynamic Gridline Package](/dynamic-gridline)