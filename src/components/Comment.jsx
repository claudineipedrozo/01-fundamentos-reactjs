import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/claudineipedrozo.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Claudinei Pedrozo</strong>
                            <time title="11 de Outubro às 23:30" dateTime="2023-10-11 23:30:10">Cerca de 21 horas atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! </p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}