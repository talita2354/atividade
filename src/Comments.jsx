import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'

export default function Comments() {
    return (
        <div className={styles.comments}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />

            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Técnico do Projeto</strong>
                            <time title='02/04/2024' dateTime='01/04/2024'>Publicado a 1 hora</time>
                        </div>
                        <div>
                        <button title='excluir comentário '><Trash /></button>
                                
                            </div>
                            
                    </header>
                    <p>Muito bom. Parabéns pela realização do curso!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Gostei <span> • 20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}