import React from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import classnames from 'classnames'
import { setActiveMenuItem } from '@store/slices/project'
import { selectActiveMenuItem } from '@store/selectors'
import { MenuItems } from '@constants/project'
import './InstrumentMenu.css'

const InstrumentMenu = () => {
  const dispatch = useAppDispatch()
  const activeMenuItem = useAppSelector(selectActiveMenuItem)

  const handleClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const { item } = e.currentTarget.dataset
    if (item) {
      dispatch(setActiveMenuItem(MenuItems[item]))
    }
  }

  return (
    <div className="instrument-menu menu">
      {Object.entries(MenuItems).map(([key, value]) => {
        const isActive = activeMenuItem === value
        return (
          <div
            className={classnames('menu__item', { active: isActive })}
            key={key}
            data-item={key}
            onClick={handleClick}>
            {value}
          </div>
        )
      })}
    </div>
  )
}

export { InstrumentMenu }
