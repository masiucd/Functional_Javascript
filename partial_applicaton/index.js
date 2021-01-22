;(async () => {
  const getData = baseURL => endPoint => cb => {
    const responseData = fetch(`${baseURL}/${endPoint}`)
      .then(data => data.json())
      .then(d => cb(d))
      .catch(err => console.error(err))

    return responseData
  }

  const jsP = getData("https://jsonplaceholder.typicode.com")
  const users = jsP("users")
  const posts = jsP("posts")

  const getNames = async () => {
    return await users(x => x.map(user => user.name))
  }
  const getPosts = async () => {
    return await posts(x => x.map(user => user.title))
  }

  const createElement = el => className => {
    const element = document.createElement(el)
    element.classList.add(className)
    return element
  }

  const render = className => async list => {
    const wrapper = document.createElement("ul")
    createElement("ul", className)
    document.body.append(wrapper)
    wrapper.innerHTML += list.map(x => `<li>${x}</li> `).join("")
  }

  render("users")(await getNames())
  render("posts")(await getPosts())
})()
