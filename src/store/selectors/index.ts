import type { RootState } from '@store/index'

export const project = (state: RootState) => state.project
export const selectActiveMenuItem = (state: RootState) =>
  project(state).activeMenuItem
export const selectGallery = (state: RootState) => project(state).gallery
export const selectSlides = (state: RootState) => project(state).slides
export const selectSlideIndex = (state: RootState) => project(state).slideIndex
export const selectTemplates = (state: RootState) => project(state).templates
