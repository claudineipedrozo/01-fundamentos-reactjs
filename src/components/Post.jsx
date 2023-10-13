import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/claudineipedrozo.png" />
                    <div className={styles.authorInfo}>
                        <strong>Claudinei Pedrozo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='26 de julho às 23:41hs' dateTime='2023-07-26 23:41:00' >Publicado há 1 hora</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que 
                    fiz no NLW Return, evento da Rocketseat. O nome do projeto é 
                    DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a> {' '}
                    <a href="">#nlw</a> {' '}
                    <a href="">#rocketseat</a> 
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}