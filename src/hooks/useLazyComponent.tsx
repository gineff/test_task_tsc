import { Suspense, lazy, ComponentType } from 'react'

const useLazyComponent = (
  importFunc: () => Promise<{ default: ComponentType<unknown> }>
): ComponentType => {
  const Component = lazy(importFunc)

  const LazyComponent = () => (
    <Suspense fallback="Loading...">
      <Component />
    </Suspense>
  )

  return LazyComponent
}

export { useLazyComponent }
