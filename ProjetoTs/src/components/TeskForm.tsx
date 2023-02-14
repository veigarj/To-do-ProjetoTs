import React from 'react'
import styles from './TeskForm.module.css'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

// Interfaces
import { ITask } from '../interfaces/Task'

type Props = {
  btnText: string
}

const TeskForm = ({btnText}: Props) => {

  const [id, seTId] = useState<number>(0);
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandle = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {

    } else {
      setDifficulty(parseInt(e.target.value))
    }
    console.log(title);
    console.log(difficulty);
  }
    
  return (
    <form onSubmit={addTaskHandle} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input type='text' name='titulo' placeholder='Titulo da tarefa' onChange={handleChange} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' onChange={handleChange} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TeskForm
