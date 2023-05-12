type ImageProps = {
  id: string | null
  style?: React.CSSProperties
}

const Image = ({ id, style }: ImageProps) => {
  if (id) {
    const str = localStorage.getItem(id)
    return (
      <img src={`data:image/png;base64,${str}`} alt="image" style={style} />
    )
  } else {
    return (
      <img
        src="https://via.placeholder.com/1670x1000"
        alt="image"
        style={style}
      />
    )
  }
}

export { Image }
