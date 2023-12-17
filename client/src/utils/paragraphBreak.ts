const paragraphBreak = (description: String): string[] => {
  return description.split(/<br\/>|\\n\\n/)
}

export default paragraphBreak
