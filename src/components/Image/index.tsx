type ImageProps = {
  id: string | null
}

const Image = ({ id }: ImageProps) => {
  if (id) {
    const str = localStorage.getItem(id)
    return <img src={`data:image/png;base64,${str}`} alt="image" />
  } else {
    return <img src="https://via.placeholder.com/1670x1000" alt="image" />
  }
}

export { Image }
