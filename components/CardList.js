import CardItem from "./CardItem"
import styles from '../styles/Card.module.css'

const CardList = () => {
    
    const titles = [
        {
            "description": "After his son's tragic death, a Louisiana pharmacist goes to extremes to expose the rampant corruption behind the opioid addiction crisis.",
            "duration": "1 Season",
            "index": 6754,
            "title": "The Pharmacist"
        },
        {
            "description": "As her seemingly idyllic life begins to crumble, a lonely woman in a restrictive marriage starts an affair with a gentle bookstore owner.",
            "duration": "1 Season",
            "index": 180,
            "title": "A Good Wife"
        },
        {
            "description": "When a former criminal psychiatrist discovers that a patient holds a secret that threatens his family, he must resort to extreme measures to save them.",
            "duration": "130 min",
            "index": 6147,
            "title": "The Blue Elephant 2"
        },
        {
            "description": "A group of aspiring young musicians yearn for stardom while navigating the ups and downs of friendship, romance, and life at school.",
            "duration": "1 Season",
            "index": 1590,
            "title": "Dancing Angels"
        },
        {
            "description": "Drivers, managers and team owners live life in the fast lane – both on and off the track – during one cutthroat season of Formula 1 racing.",
            "duration": "2 Seasons",
            "index": 2246,
            "title": "Formula 1: Drive to Survive"
        },
        {
            "description": "A cheerful jet and his transforming pals strive to find peaceful solutions to their problems while delivering packages to children around the globe.",
            "duration": "3 Seasons",
            "index": 5905,
            "title": "Super Wings"
        },
        {
            "description": "An aspiring writer with no imagination seeks inspiration for his novel by manipulating the lives of his neighbors so that he can write about them.",
            "duration": "114 min",
            "index": 6689,
            "title": "The Motive"
        },
        {
            "description": "An aspiring writer goes to the airport to pick up a high school friend returning from a trip to Africa but is disheartened to see her with another man.",
            "duration": "148 min",
            "index": 1145,
            "title": "Burning"
        },
        {
            "description": "The isolated life of an extreme introvert is thrown out of order when his company hires a new employee: a cheery extrovert who's not all she seems.",
            "duration": "1 Season",
            "index": 4354,
            "title": "My Shy Boss"
        },
        {
            "description": "Accident or murder? After the mysterious death of his wife, author Michael Peterson watches his life go under the microscope.",
            "duration": "1 Season",
            "index": 6900,
            "title": "The Staircase"
        }
    ]

    return (
        <div className={styles.container}>
            {titles.map((title, index) => <CardItem props = {title} id={index+1} />)}
        </div>
    )
}



export default CardList
