## The Introduction

Infotik was my first long-term job. I joined the company through Upwork for a quick performance fix, but that small task turned into a long-term contract. As the sole frontend developer for most of my time there, I got to work on multiple frontend applications (some from scratch) while keeping them running and adding new features.

Being the only frontend developer (most of the time) meant I took full ownership of all the frontend work. Infotik was a great experience that taught me a lot, and I'll always be grateful for it.

Here are some of the projects I worked on and features I built during my time there.

## Mobile App

Through my time at Infotik, I implemented multiple features in the mobile app, from a reel-like feed, a twitter-like feed, a chatting system, and more. Here are some of the features I worked on:

### Tiks

Tiks are the short video content in Infotik. When I joined, the Tiks feature had significant performance issues—it was laggy while scrolling and had several other problems.

#### The Performance Problem

I discovered that the app was fetching all available videos from the backend on startup and then serving them in the feed. This approach was clearly not optimal and was causing the performance issues.

#### Implementing Infinite Scrolling

To fix this, I implemented an infinite scrolling system:

1. **Initial Load**: I fetched a `PACK_AMOUNT` of videos on app start. After testing different values, I found that **4 videos** was the sweet spot that balanced between frequent requests and loading the next couple of videos in advance for a seamless scrolling experience.

2. **Lazy Loading**: I set up the system to fetch `PACK_AMOUNT/2` (2 videos) when the end-reached event listener on the FlatList fired. I also set the `onEndReachedThreshold` to `PACK_AMOUNT` to always fetch new videos before actually reaching the end of the list.

This change made a huge improvement, but the app was still a bit laggy.

#### Code Optimization

I continued optimizing by:

- **Refactoring the existing code**: Simplified the logic inside the single Tik video component to make it faster to render
- **Adding memoization**: Used `useMemo`, `memo`, and `useCallback` to reduce rerendering costs while scrolling

After these improvements, the app got a huge performance boost and scrolling now feels smooth.

#### Future Optimization Plans

I'm planning to add more optimization by block-rendering the components above the video (like buttons, comments, user details, etc.) until the user stops at the video for more than 2 seconds. This would reduce rendering costs even more while fast swiping.

#### Fixing the Play/Stop Mechanism

Another issue we faced was that videos sometimes kept playing when navigating to other tabs or when closing the app. After examining the system, I found very complex logic for running and stopping videos during scrolling, tab switching, etc. The logic was fragile and had many issues.

I also discovered that some of the logic was running in effects when it should have been in event handlers instead. I simplified the logic by breaking it into small parts and moving the appropriate code to event handlers. This made the playing/stopping mechanism more reliable.

Here's a simplified example of the new logic:

```javascript
// Setting up listeners for navigation and app state changes
const unsubscribeBlur = navigation.addListener("blur", handleBlurring);
const unsubscribeFocus = navigation.addListener("focus", handleFocus);
const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

return () => {
  unsubscribeFocus();
  unsubscribeBlur();
  appStateSubscription.remove();
}
```

```javascript
// Handling viewable items change
const onViewableItemsChanged = ({ changed }) => {
  changed.forEach(async ({ isViewable, item }) => {
    const tik = tiksRefs.current[item.tikId];

    if (!isViewable) {
      return tik.stop();
    }

    if (!tik.isLoading) {
      tik.play();
    }

    currentTikRef.current = tik;
  });
}
```


### Chatting System

We needed to implement an internal messaging system for the app. At first, I looked at open-source packages to avoid building the chatting mechanism from scratch and focus more on Infotik-specific features.

#### Trying React Native Gifted Chat

I started by using [`react-native-gifted-chat`](https://github.com/FaridSafi/react-native-gifted-chat), a popular messaging library. However, after some testing, I found a critical limitation: it didn't allow bottom-to-top message ordering while having the sender's profile picture next to the last message bubble in the message group. This UX pattern was important for our design.

#### Building a Custom Solution 

I decided to build my own custom chatting components and a custom hook for connecting to the WebSocket and handling actions. While this took some time, it was worth the effort. Adding new Infotik-specific features became much simpler than it would have been with React Native Gifted Chat.

For example, we could easily implement features like in-app shared Tiks or Pulses with in-app links that navigate directly to that content—something that would have been much more difficult to integrate with a pre-built solution.

## Advertisement Platform


We also built an advertisement suite so advertisers could create and manage ads inside the app.

#### Advertiser Dashboard

- **Authentication**: Advertisers log in to access their dashboard.
- **Ad creation**: Create Tik ads (video upload) or Pulse ads (image upload).
- **Call-to-Action**: Configure CTA text and destination link.
- **Funding options**: Choose credentials/options such as target views and price for both Tiks and Pulses.

#### Payments and Funding

When an advertiser selects a funding option, they are redirected to a Stripe Checkout portal. After payment, they return to a payment callback route that verifies the status:

- If the payment is still processing: show a pending state
- When completed: confirm success, credit the purchased views to the ad, and redirect to the dashboard to view details

The dashboard also shows the number of funded views and how many have been consumed in real time, helping advertisers know when to add more funds.

#### Video Processing Status (Polling)

Sometimes uploaded videos take time to process. To handle this, I implemented status polling using `useQuery` with a `refetchInterval` of 30 seconds. The query checks the processing state for each video:

- If processing has finished: update the status in the query cache and stop polling
- If not: keep polling until completion

#### In-App Ad Preview (Design Review)

While creating a new ad, advertisers can preview how it will look in the real app. I captured reference layers from the Tik feed (e.g., the phone frame/background and the right-side action buttons like Like, Comment, Share). Using Shadcn's `Dialog` component, the preview stacks:

1. Background frame
2. The uploaded video (for Tik) or image (for Pulse)
3. The overlay UI layer (buttons, tags, description, CTA at the bottom)

This gives advertisers an accurate preview of how users will see the ad in production. The same preview flow exists for Pulse ads as well.

## Content Sharing

We needed to implement a content sharing mechanism in the app to allow users to share Tiks and Pulses outside the platform.

#### Building the Sharing Backend

I created a simple Node.js script that accepts requests with either a Tik ID or a Pulse ID. The script handles different scenarios based on where the link is opened:

- **If the user has the app installed**: Redirects to the app using a deep link
- **If the app isn't installed**: Redirects to the App Store or Play Store to download it
- **If opened from the web**: Redirects to the company's landing page

#### Adding Open Graph Support

To make the shared links more engaging, I implemented Open Graph (OG) metadata support. The script fetches the Tik or Pulse content (title, thumbnail, description, etc.) and attaches it as OG meta tags in the response.

This means when someone shares a Tik or Pulse on platforms like Facebook, Twitter, or Discord, a rich preview shows up with the video thumbnail and description—inviting users to click the link and watch the content.

#### Deep Link Handling in the App

I also implemented a deep link handling mechanism in the app to:

1. Parse the incoming deep link
2. Fetch the appropriate Tik or Pulse content
3. Navigate the user directly to that content

This creates a seamless experience where users can tap a shared link and land directly on the specific video or content, whether they're opening it for the first time or coming back to the app.