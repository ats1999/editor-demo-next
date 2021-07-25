import Link from "next/link";

const links = [
  {
    text: "Editor Light",
    url: "/editor-light"
  },
  {
    text:"Editor Dark",
    url:"/editor-dark"
  },
  {
    text:"Editor WYSWYG (GUI)",
    url:"/editor-wyswyg"
  },
  {
    text:"Dark Editor with input",
    url:"/editor-all-dark"
  },
  {
    text: "Light Editor with input",
    url: "/editor-all-light"
  },
  {
    text:"Markdown Dark",
    url:"/viewer-dark"
  },
  {
    text:"Markdown Light",
    url:"/viewer-light"
  }
]
export default function Home() {
  return (
    <div>
      <h1>Hi, i  am Rahul!</h1>
      <ul>
        {links.map(link => <li key={link.url}>
          <Link href={link.url}>
            <a>{link.text}</a>
          </Link>
        </li>)}
      </ul>
    </div>
  )
}
