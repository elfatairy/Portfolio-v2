# Dynamic Gridline - From Problem to Package

## The Problem

While working on [**IdeaWall**](/ideawall)—a collaborative environment where users could add sticky notes and react to others' notes—I needed something like a digital whiteboard to be its background. Specifically, I wanted a grid system similar to those found in design applications like Figma or Sketch. The goal was simple: create a background grid where users could place and position sticky notes with precision and intuitive navigation in a collaborative space.

I spent considerable time searching through existing packages and solutions, but nothing quite fit my specific use case. The available options were either too basic, overly complex, or didn't provide the smooth, design-tool-like experience I was after. That's when I made the decision that would lead to an entirely new learning journey: **I'll just build it myself.**

![Idea Wall](/public/images/dynamic-gridline/ideawall.png)

## My Role and Development Process

As a solo developer on this project, I handled everything—from initial problem analysis to final package publication. My development process evolved significantly throughout this journey:

**Initial Planning**: I started by analyzing existing design tools to understand what made their grid systems feel intuitive and responsive. The key insight was that users expect smooth panning, zooming, and precise positioning without any performance issues.

**First Implementation**: My initial approach was straightforward but naive. I used CSS positioning with React state to track the current X and Y positions of the grid. While this worked for basic functionality, it quickly became apparent that this approach had serious limitations.

**The Performance Foresight**: While my CSS-based approach worked initially, I quickly realized it wouldn't scale. In a collaborative environment like IdeaWall, imagine dozens of sticky notes that all need to be repositioned and scaled with every grid movement—each triggering state updates and re-renders. I didn't wait to experience the performance issues; I proactively recognized that this approach would create problems as the application grew. This was my first major learning moment—sometimes you need to think ahead and choose the right solution before problems manifest.


**The Pivot to Framer Motion**: After researching performance-optimized animation libraries, I chose Framer Motion (now Motion.dev). What made it perfect for my use case was its hybrid approach—combining CSS animations with JavaScript's `requestAnimationFrame` to efficiently animate between states without triggering React re-renders.

## Technology Stack

- **React**: Component-based architecture for reusable grid components
- **Framer Motion (Motion.dev)**: High-performance animations and gesture handling
- **TypeScript**: Type safety and better developer experience
- **TSUP**: Modern build tool for package compilation
- **PNPM Workspaces**: Monorepo setup for package development
- **CSS Modules**: Scoped styling system

## Challenges and Solutions

### Challenge 1: Component Communication Architecture

**The Problem**: Grid items needed to know about the grid container's state (zoom level, pan position) to position themselves correctly. How do you elegantly share state between a container and its dynamically placed children?

**My Solution**: I implemented the compound component pattern using React Context. The grid container provides its state through context, and grid items consume this state to calculate their correct positions. This approach keeps the API clean while ensuring tight coupling between related components.

```tsx
// Simplified example of the compound component pattern
<GridContainer>
  <GridItem x={5} y={3}>
    <StickyNote content="My note" />
  </GridItem>
</GridContainer>
```

### Challenge 2: Package Build Configuration

**The Problem**: This was my first time publishing an npm package, and I hit a major roadblock with CSS handling. After choosing TSUP as my build tool and writing the configuration, I was shocked to see a completely unstyled webpage—none of my CSS was being applied to the components.

**The Investigation**: I dove deep into build tool documentation and Stack Overflow threads. I tried various solutions:
- ESBuild plugins for CSS modules (didn't work as expected)
- Manual CSS imports (required consumers to import CSS separately—not ideal)
- Different bundler configurations (added complexity without solving the core issue)

**The Solution**: After extensive research and many failed attempts, I discovered that adding a simple configuration to TSUP solved everything:

```javascript
// tsup.config.js
export default {
  loader: {
    '.css': 'copy',
  }
}
```

This configuration automatically handled CSS bundling and importing, ensuring that styles were properly attached to components without requiring additional setup from package consumers.

### Challenge 3: Development Workflow

**The Problem**: I needed to see how the grid behaved in real-time while developing the package, but working with a separate package made testing cumbersome.

**My Solution**: I learned and implemented PNPM workspaces, creating a monorepo structure that allowed me to develop the package alongside a test application. This setup enabled hot reloading and immediate feedback during development.

### Challenge 4: Configuration and Flexibility

**The Problem**: My original implementation was full of hard-coded values that worked for my specific use case but wouldn't serve a broader audience. I needed to make the package highly configurable without overwhelming users with options.

**My Solution**: I designed a comprehensive configuration interface with sensible defaults:

This required significant refactoring, but it transformed a project-specific solution into a flexible, reusable package.

![Dynamic Gridline configuration interface](/images/dynamic-gridline/interface.png)

## The Impact

Publishing Dynamic Gridline was incredibly rewarding. On the first day alone, the package saw over 70 downloads on NPM—a validation that others shared similar needs and found value in the solution I'd created. While some of those downloads were likely from my own testing, seeing real adoption from the developer community was both humbling and motivating.

---

**Try it yourself**: [Dynamic Gridline on NPM](https://www.npmjs.com/package/dynamic-gridline)  
**Source Code**: [GitHub Repository](https://github.com/elfatairy/dynamic-gridline)