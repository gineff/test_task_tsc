import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { selectTemplates } from '@store/selectors'
import './InstrumentTemplates.css'
import { setSlideTemplate } from '@store/slices/project'

const InstrumentTemplates = () => {
  const templates = useAppSelector(selectTemplates)
  const dispatch = useAppDispatch()

  return (
    <div className="template__content">
      {templates && templates.length
        ? templates.map((url, i) => (
            <div
              onClick={() => dispatch(setSlideTemplate(url))}
              className="template__card"
              key={i}
              style={{ backgroundImage: `url(${url.slice(0, -4)}.jpg)` }}
              role="button"
              tabIndex={0}
              aria-label={`Template ${i + 1}`}
            />
          ))
        : null}
    </div>
  )
}

export default InstrumentTemplates
