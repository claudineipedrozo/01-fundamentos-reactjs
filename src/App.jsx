/* eslint-disable react/jsx-key */

import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/claudineipedrozo.png',
      name: 'Claudinei Pedrozo',
      role: 'Apprentice Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}               
    ],
    publishedAt: new Date('2023-10-13 18:00:10'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragrah', content: 'Fala galeraa 👋'},
      { type: 'paragrah', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}               
    ],
    publishedAt: new Date('2023-10-10 17:00:10'),
  },
]


export function App() {
 

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


