import { useAppDispatch } from '@hooks/redux_typed_hooks'
import { SwatchesPicker } from 'react-color'
import './InstrumentBackground.css'
import { setSlideBackgroundColor } from '@store/slices/project'

const InstrumentBackground = () => {
  const dispatch = useAppDispatch()

  const handleChange = ({ hex }: { hex: string }) => {
    dispatch(setSlideBackgroundColor(hex))
  }

  return (
    <div className="instrument-background">
      <SwatchesPicker onChange={handleChange} />
    </div>
  )
}

export default InstrumentBackground
