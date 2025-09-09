import { useTheme } from '@/contexts/ThemeContext'

export default function LightDarkToggle() {
  const { toggleDarkMode } = useTheme()

  const toggleTheme = () => {
    toggleDarkMode()
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        grid grid-cols-[repeat(54,1px)] grid-rows-[repeat(24,1px)] gap-0 relative 
        bg-[#0dbdf6] dark:bg-[#272a30] 
        rounded-[49px] cursor-pointer 
        transition-[background-color,border-color] duration-[0.8s] ease-in-out 
        appearance-none p-1 h-fit
      `}
      aria-label="Switch theme"
    >
      {/* Sun/Moon */}
      <div
        className={`
          dark:bg-[#fffdf2] dark:col-[33/53] bg-[#fabc1c] col-[3/23] 
          row-[3/23] rounded-full h-5 
          transition-[grid-column-start,grid-column-end,background-color] duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />

      {/* Moon overlay */}
      <div
        className={`
          absolute rounded-full z-[1]
          bg-[#0dbdf6]
          dark:block dark:left-[calc(28/54*100%)] dark:top-[calc(4/29*100%)] dark:w-[18px] dark:h-[18px] dark:bg-[#272a30]
          transition-[left,background-color] duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />

      {/* Cloud balls / Stars */}
      <div
        className={`
          bg-[#fffdf2] rounded-full absolute z-[2]
          dark:top-[calc(16/24*100%)] dark:left-[calc(16/54*100%)] dark:w-[2px] dark:h-[2px] top-[calc(8/24*100%)] left-[calc(12/54*100%)] w-[9px] h-[9px]
          transition-all duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
      <div
        className={`
          bg-[#fffdf2] rounded-full absolute z-[2]
          dark:top-[calc(3/24*100%)] dark:left-[calc(22/54*100%)] dark:w-[2px] dark:h-[2px] top-[calc(8/24*100%)] left-[calc(17/54*100%)] w-[9px] h-[9px]
          transition-all duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
      <div
        className={`
          bg-[#fffdf2] rounded-full absolute z-[2]
          dark:top-[calc(10/24*100%)] dark:left-[calc(29/54*100%)] dark:w-[2px] dark:h-[2px] top-[calc(8/24*100%)] left-[calc(22/54*100%)] w-[9px] h-[9px]
          transition-all duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
      <div
        className={`
          bg-[#fffdf2] rounded-full absolute z-[2]
          dark:top-[calc(5/24*100%)] dark:left-[calc(34/54*100%)] dark:w-[2px] dark:h-[2px] top-[calc(6/24*100%)] left-[calc(17/54*100%)] w-[9px] h-[9px]
          transition-all duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />

      {/* Stars */}
      <div
        className={`
          bg-[#fffdf2] w-px h-px absolute rounded-full
          top-[calc(7/24*100%)] left-[calc(10/54*100%)]
          dark:opacity-100 opacity-0
          transition-opacity duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
      <div
        className={`
          bg-[#fffdf2] w-px h-px absolute rounded-full
          top-[calc(9/24*100%)] left-[calc(16/54*100%)]
          dark:opacity-100 opacity-0
          transition-opacity duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
      <div
        className={`
          bg-[#fffdf2] w-px h-px absolute rounded-full
          top-[calc(13/24*100%)] left-[calc(23/54*100%)]
          dark:opacity-100 opacity-0
          transition-opacity duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
      <div
        className={`
          bg-[#fffdf2] w-px h-px absolute rounded-full
          top-[calc(18/24*100%)] left-[calc(29/54*100%)]
          dark:opacity-100 opacity-0
          transition-opacity duration-[0.8s] ease-in-out
        `}
        aria-hidden="true"
      />
    </button>
  )
}
