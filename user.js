async function main(params) {
  const id = localStorage.getItem("id")
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?')
  const postsData = await posts.json()
  console.log(postsData)
}

main()