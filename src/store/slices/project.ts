import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { GalleryImages, Slide, projectInitialState } from '@constants/project'
import type { ProjectSlice } from '@constants/project'
import { LoadingStatus } from '@constants/project'
import { nanoid } from 'nanoid'

const fetchImagesId = async (): Promise<string[]> => {
  const serializedGalleryImagesId = localStorage.getItem('galleryImagesId')
  try {
    if (serializedGalleryImagesId != null) {
      const galleryImagesId = JSON.parse(serializedGalleryImagesId)
      return galleryImagesId
    } else {
      throw new Error()
    }
  } catch (e) {
    console.log(e)
    return []
  }
}

export const saveImage = createAsyncThunk(
  'project/saveImage',
  async (str: string) => {
    const id = nanoid(10)
    localStorage.setItem(id, str)
    const imagesId = await fetchImagesId()
    imagesId.push(id)
    localStorage.setItem('galleryImagesId', JSON.stringify(imagesId))
    return { [id]: str }
  }
)

export const fetchImages = createAsyncThunk('project/fetchImages', async () => {
  const galleryImages: GalleryImages = {}
  try {
    const galleryImagesId = await fetchImagesId()
    //console.log('galleryImagesId', galleryImagesId)
    for (const imageId of galleryImagesId) {
      const image = localStorage.getItem(imageId)
      if (image) {
        galleryImages[imageId] = image
      }
    }

    return galleryImages
  } catch (error) {
    console.log(error)
    return galleryImages
  }
})

export const removeImages = createAsyncThunk(
  'project/removeImages',
  async () => {
    try {
      const galleryImagesId = await fetchImagesId()
      localStorage.removeItem('galleryImagesId')
      for (const imageId of galleryImagesId) {
        localStorage.removeItem(imageId)
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export const fetchSlides = createAsyncThunk('project/fetchSlides', async () => {
  try {
    const serializedSlides = localStorage.getItem('slides')
    if (serializedSlides) {
      const slides: Slide[] = JSON.parse(serializedSlides)
      return slides
    } else {
      const { slides } = projectInitialState
      return slides
    }
  } catch (error) {
    console.log(error)
    return []
  }
})

export const saveSlides = createAsyncThunk(
  'project/saveSlides',
  async (slides: Slide[]) => {
    localStorage.setItem('slides', JSON.stringify(slides))
  }
)

const projectSlice = createSlice({
  name: 'project',
  initialState: projectInitialState,
  reducers: {
    setActiveMenuItem(
      state,
      action: PayloadAction<ProjectSlice['activeMenuItem']>
    ) {
      state.activeMenuItem = action.payload
    },
    setSlideTemplate(state, action) {
      console.log(action.payload)
      const { slideIndex, slides } = state
      slides[slideIndex].template = action.payload
      state.slides = [...slides]
    },
    setSlideBackgroundColor(state, action) {
      const { slideIndex, slides } = state
      slides[slideIndex].background = action.payload
      state.slides = [...slides]
    },
    setSlideImage(state, action) {
      const { slideIndex, slides } = state
      slides[slideIndex].image = action.payload
      state.slides = [...slides]
    },
    setSlideIndex(state, action) {
      state.slideIndex = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSlides.fulfilled, (state, action) => {
        state.slides = action.payload
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.gallery.images = action.payload
      })
      .addCase(removeImages.fulfilled, state => {
        state.gallery.images = {}
        state.slides = [
          ...state.slides.map(slide => ((slide.image = null), slide)),
        ]
      })
      .addCase(saveImage.fulfilled, (state, action) => {
        const record = action.payload
        state.gallery.images = { ...state.gallery.images, ...record }
      })
      .addMatcher(
        action => /^project.*?\/pending/.test(action.type),
        state => {
          state.loadingStatus = LoadingStatus.Loading
        }
      )
      .addMatcher(
        action => /^project.*?\/rejected/.test(action.type),
        state => {
          state.loadingStatus = LoadingStatus.Failed
        }
      )
      .addMatcher(
        action => /^forum.*?\/fulfilled/.test(action.type),
        state => {
          state.loadingStatus = LoadingStatus.Succeeded
        }
      )
  },
})

export const {
  setActiveMenuItem,
  setSlideIndex,
  setSlideImage,
  setSlideBackgroundColor,
  setSlideTemplate,
} = projectSlice.actions

export default projectSlice.reducer
