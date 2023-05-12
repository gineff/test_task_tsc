import { useAppSelector } from '@hooks/redux_typed_hooks'
import { selectActiveMenuItem } from '@store/selectors'
import { InstrumentMenu } from '@components/InstrumentMenu'
import './Instruments.css'
import { MenuItems } from '@constants/project'
import { useLazyComponent } from '@hooks/useLazyComponent'

const componentMapping = {
  [MenuItems.gallery]: () => import('@components/InstrumentGallery'),
  [MenuItems.templates]: () => import('@components/InstrumentTemplates'),
  [MenuItems.background]: () => import('@components/InstrumentBackground'),
}
const Instruments = () => {
  const activeMenuItem = useAppSelector(selectActiveMenuItem)
  const ActiveComponent = useLazyComponent(componentMapping[activeMenuItem])
  return (
    <div className="instruments">
      <InstrumentMenu />
      <ActiveComponent />
    </div>
  )
}

export { Instruments }
