import Recipes from "../images/projects/recipes.png"
import Shop from "../images/projects/shop.jpg"
import Chat from "../images/projects/chat.png"

export const projects = [
  {
    name: "Chat app",
    featured: true,
    url: "http://localhost:3000",
    github: "http://localhost:3000",
    image: Chat,
    description:
      "Consequat cupidatat velit elit velit. Lorem dolor Lorem ut nulla qui qui ex labore laboris tempor elit. In velit Lorem amet laboris irure ea excepteur irure amet ad.",
    stack: [
      { id: "0", name: "socket.io" },
      { id: "1", name: "React" },
      { id: "2", name: "Html" },
      { id: "3", name: "css" },
    ],
  },
  {
    name: "Recipes app",
    featured: true,
    url: "http://localhost:3000",
    github: "http://localhost:3000",
    image: Recipes,
    description:
      "Consectetur dolor amet sit aliquip labore. Esse in do sunt id sit. Lorem non cupidatat velit ut adipisicing ex laborum commodo amet culpa id cillum. Laborum enim reprehenderit culpa elit consequat occaecat.",
    stack: [
      { id: "0", name: "React" },
      { id: "1", name: "Html" },
      { id: "2", name: "css" },
    ],
  },
  {
    name: "YouTube Clone",
    featured: false,
    url: "http://localhost:3000",
    github: "http://localhost:3000",
    image: Shop,
    description:
      "Consequat cupidatat velit elit velit. Lorem dolor Lorem ut nulla qui qui ex labore laboris tempor elit. In velit Lorem amet laboris irure ea excepteur irure amet ad.",
    stack: [
      { id: "0", name: "React" },
      { id: "1", name: "Html" },
      { id: "2", name: "css" },
    ],
  },
]
