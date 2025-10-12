> **Note**: This project is currently under development. Scroll to the bottom to view the roadmap for upcoming features and improvements.

## The Inspiration

When I looked at my side projects, most of them were small-scale with limited integrated features. I wanted to challenge myself by building something larger and more complex, a project that would help me learn how to write clean and maintainable code that scales well as features are added.

This is why I decided to build Taska, a work management system similar to Jira but at a smaller scale and focusing more on teams and projects.

![Taska Demo](/public/images/taska/main.png)

## Challenges and Solutions

### Challenge 1: Scalable Icon Management

The first challenge I faced was rendering icons in a scalable way. Simply importing SVG files and rendering them as images wouldn't inherit the parent's color, making it difficult to maintain a consistent design system.

After some research, I found [this article](https://dev.to/seanyasno/handling-icons-in-react-best-practices-22c5) that introduced me to `@svgr/cli`, a tool that converts SVG files into React components. I implemented this approach, and now whenever I need to add a new icon, I simply:

1. Save the SVG file in the `assets/svgs` folder
2. Run `pnpm icons` to generate React components
3. Use the icon like any other React component with full prop support

This workflow allows me to pass parameters to icons, style them with CSS, and maintain them as first-class React components, making the codebase much more maintainable and scalable.

### Challenge 2: Building a Mock Backend System

Since I wanted to focus on frontend development, I didn't want to implement a real backend. However, I still needed the app to be interactive and persistent. I evaluated several mock backend options and here is why I didn't use them:

- **JSON Server**: Requires running a separate server process
- **MSW**: Only works for testing, not suitable for deployed apps
- **Beeceptor/Mockoon**: External tools, not integrated into codebase
- **Vercel Edge Middleware**: Stateless, can't persist changes without a database

Finally, I decided to build a custom mock API system with an `api` object that registers handlers matching URL patterns. Each feature has a `feature.json` file for initial data and a `feature.ts` file for endpoints. To make it realistic, I added probability-based error generation and artificial server delays to simulate real network conditions.

```ts
interface IMockApi {
  registerEndpoint(method: string, url: string, config: EndpointConfig): void;
  setDelay(ms: number): void;
  createError(
    status: number,
    message: string,
    config: MockRequestConfig
  ): MockError;
  createResponse<T = any>(
    data: T,
    config: MockRequestConfig,
    status?: number,
    headers?: Record<string, string>
  ): MockResponse<T>;
  get<T = any>(
    url: string,
    config?: Omit<MockRequestConfig, "url" | "method">
  ): Promise<MockResponse<T>>;
  ...
}
```

## Roadmap

### ✅ Completed Features

- [x] Implement layout and sidebar
- [x] Implement mock backend
- [x] Role selection and onboarding flow

### 🚧 Upcoming Features

- [ ] Users management by the CTO
- [ ] Team formation by the CTO
- [ ] Project creation by the CTO
- [ ] Team selection and management by the project manager