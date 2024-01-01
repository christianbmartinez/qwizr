export function formatSlug(slug: string): string {
  const [firstWord, secondWord] = slug.split('-')

  const formattedSlug = `${
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
  } 
   ${secondWord.charAt(0).toUpperCase() + secondWord.slice(1)}`

  return formattedSlug
}