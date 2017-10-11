export const windowResize = (width, height) => ({
  type: 'WINDOW_RESIZE',
  width, height
})

export const windowScroll = (scrollLeft, scrollTop) => ({
  type: 'WINDOW_SCROLL',
  scrollLeft, scrollTop
})
