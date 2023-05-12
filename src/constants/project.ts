export type MenuItemsType = { [key: string]: string }

export const MenuItems: MenuItemsType = {
  gallery: 'Галерея',
  templates: 'Шаблон',
  background: 'Фон',
}

export enum LoadingStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
}

export type Slide = {
  image: string | null
  background: string | null
  template: string | null
}

export type ProjectSlice = {
  loadingStatus: LoadingStatus
  activeMenuItem: keyof typeof MenuItems
  slideIndex: number
  slides: Slide[]
  templates: string[]
  gallery: {
    images: GalleryImages
  }
}

export type GalleryImages = { [key: string]: string }

export const projectInitialState: ProjectSlice = {
  loadingStatus: LoadingStatus.Idle,
  activeMenuItem: MenuItems.gallery,
  slideIndex: 0,
  templates: [
    'src/assets/images/background_1.png',
    'src/assets/images/background_2.png',
    'src/assets/images/background_3.png',
  ],
  slides: Array.from({ length: 3 }, () => ({
    image: null,
    background: null,
    template: null,
  })),
  gallery: { images: {} },
}
