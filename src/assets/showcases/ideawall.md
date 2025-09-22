# IdeaWall - A Real-Time Collaborative Note-Taking Experience

## The Inspiration

I was searching for a new side project idea, but I didn't want to build another ecommerce site, blog, or landing page—the usual suspects that fill most portfolios. I craved something different, something that would push my creativity and technical skills in new directions.

After extensive brainstorming, I landed on a concept that excited me: **a collaborative note-taking app where users could create sticky notes, see others' notes in real-time, and interact with each other in a shared digital space**. Think of it as a digital whiteboard where ideas could flow freely and collaboratively.

![Idea Wall Demo](/public/images/ideawall/main.png)

## My Role and Development Journey

As a solo developer, I handled every aspect of this project—from initial concept to deployment. My focus was primarily on frontend development as I was actively working to strengthen my skills in that area of my career.

**The Grid Foundation**: My first challenge was creating the grid background that would serve as the canvas for sticky notes. I needed something similar to design tools like Figma, but existing packages didn't suit my specific use case. This led me to build my own solution, which eventually evolved into a complete npm package—[Dynamic Gridline](/dynamic-gridline).

**Designing the Experience**: Once the foundation was set, I focused on the sticky note design itself. I implemented multiple color options and added motion animations that transformed the user experience from functional to delightful.

## Technology Stack

- **React**: Component-based architecture for interactive UI components
- **Supabase**: Real-time database and authentication with minimal backend complexity
- **Framer Motion**: Smooth animations and gesture handling
- **TypeScript**: Type safety and enhanced developer experience
- **@2toad/profanity**: Content moderation (extended for Arabic support)
- **Playwright**: End-to-end testing framework
- **Dynamic Gridline**: Custom-built grid system (my own npm package)

## Challenges and Solutions

### Challenge 1: Real-Time Collaboration Architecture

**The Problem**: I wanted users to see each other's sticky notes appear, update, and disappear in real-time. This required a robust real-time system that could handle multiple concurrent users without performance issues.

**My Solution**: I chose Supabase for its low-friction approach—it provided real-time capabilities without requiring custom backend development or complex deployment processes. This allowed me to focus on the frontend experience while still delivering powerful collaborative features.

![Realtime Demo](/public//images/ideawall/realtime-demo.mp4)

### Challenge 2: Inclusive User Experience

**The Problem**: I wanted the barrier to entry to be as low as possible. Users should be able to jump in and start collaborating within seconds, without lengthy registration processes.

**My Solution**: I implemented a streamlined authentication flow with a fake name/avatar generator. This approach was inclusive to users who preferred to remain anonymous while still providing enough identity to make collaboration meaningful.

```tsx
// Simplified example of anonymous user generation
const randomize = () => {
  setAvatar(genConfig({ sex }))
  setName(randomizeNameHelper(sex))
}
```

### Challenge 3: Content Moderation Across Languages

**The Problem**: Once I added the anonymous feature, I realized users could potentially post inappropriate content. I needed content moderation, but existing solutions didn't support Arabic—and I wanted the app to be welcoming to Arabic-speaking users.

**My Investigation**: I found the `@2toad/profanity` package, which handled English profanity detection well, but it lacked Arabic support entirely.

**My Solution**: I extended the library to include Arabic profanity detection, creating a more inclusive content moderation system that could serve a broader user base.

![Profanity Demo](/public//images/ideawall/profanity-demo.mp4)

### Challenge 4: Real-Time Cursor Tracking

**The Problem**: While using Google Docs one day, I was inspired by how they show currently online users and their cursor positions in real-time. I realized that an interactive app like IdeaWall would benefit tremendously from this feature.

**My Solution**: I implemented real-time cursor broadcasting using Supabase's real-time features. However, I quickly discovered that broadcasting every mouse movement would create performance issues and abuse bandwidth.

**The Optimization**: I built a custom throttling function to limit the frequency of cursor position updates, striking the right balance between real-time feel and system performance.

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

### Challenge 5: Comprehensive Testing Strategy

**The Problem**: I wanted to ensure the app wouldn't break as I continued developing features. Given the app's interactive nature with defined user inputs and expected outputs, end-to-end testing seemed like the perfect approach.

**Authentication Challenge**: The biggest hurdle was maintaining consistent authentication across tests. Since the app used local session storage instead of traditional username/password authentication, I needed a way to simulate logged-in users reliably.

**My Solution**: After research and experimentation, I discovered that by saving Supabase's localStorage objects and injecting them into test sessions, I could authenticate as specific test accounts. I created two dedicated test accounts and built utility functions to switch between them during tests.

**Platform Reliability Issues**: My tests worked perfectly on Chromium and WebKit but consistently failed on Firefox in CI/CD. After extensive debugging (and I mean *extensive* 😂), I discovered the issue was with wheel zoom behavior—it varied significantly across platforms.

**The Fix**: I replaced wheel zoom interactions with my custom zoom slider component, ensuring consistent behavior across all browsers. I also created a dedicated testing area within the grid and built utilities to navigate to this area reliably, preventing test interference with real users.

![Test Success Results](/public/images/ideawall/tests-success.png)

## Key Learning Outcomes

This project pushed me far beyond my comfort zone and taught me invaluable lessons:

**Real-Time Architecture**: I gained deep experience with real-time systems and learned how to balance performance with user experience in collaborative applications.

**Content Moderation**: I learned about the complexities of building inclusive, multilingual applications and the importance of considering diverse user bases from the start.

**Testing Strategy**: I discovered the intricacies of end-to-end testing for interactive applications and learned how to create reliable, cross-platform test suites.

**Package Development**: Building the Dynamic Gridline package taught me about npm publishing, build tooling, and creating reusable components for the broader developer community.

**Performance Optimization**: Implementing features like cursor tracking taught me about throttling, debouncing, and other optimization techniques crucial for real-time applications.

## The Impact

IdeaWall became more than just a note-taking app—it evolved into a comprehensive learning experience that touched on real-time systems, package development, testing strategies, and inclusive design. The project also led to the creation of Dynamic Gridline, an npm package that other developers now use in their own projects.

The collaborative nature of the app created engaging user experiences, with the real-time cursor tracking and instant note synchronization making users feel truly connected in the digital space.

---

**Try it yourself**: [IdeaWall Live Demo](https://ideawall.omarhassan.net)

**Source Code**: [GitHub Repository](https://github.com/elfatairy/ideaWall)

**Related Project**: [Dynamic Gridline Package](/dynamic-gridline)
